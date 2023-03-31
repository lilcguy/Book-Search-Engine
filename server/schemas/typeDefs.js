//import graphQL
// GraphQL server uses a schema to describe the shape of your available data.
const { gql } = require('apollo-server-express');

const typeDefs = gql `

type User {
    _id: ID #mongodb uses _id
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book] #references an array of Book type
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String

}

input saveBookContent { #After you define an input type, any number of different object fields can accept that type as an argument:
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
}

type Auth {
    token: String
    user: User #references User type
}

type Query { #type query lists all of available queries that clientside can make and what is returned.
    me(userId: ID): User #references User type ##how do i get current user logged in??? use type Auth?
}

type Mutation { # the Mutation type defines entry points for write operations.
    login(email: String, password: String): Auth #email and password are parameters, returns a type Auth (a user, and a token)
    addUser(username: String, email: String, password: String): Auth
    saveBook(content: saveBookContent): User #used input type saveBookContent here
    removeBook(bookId: String): User

}

`

module.exports = typeDefs;