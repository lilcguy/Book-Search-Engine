//we define what we want

const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book { 
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String

}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]

}

type Auth {
    token: String
    user: User


}


type Query { #queries that can be used are put into this object
    #me : which returns a User type
    me: User

}

type Mutation { #mutations that can be used, i.e. changes to data, are put into this object.
# login: Accepts an email and password as parameters; returns an Auth type.
login(email: String, password: String): Auth

#addUser: Accepts a username, email, and password as parameters; returns an Auth type.
addUser(username: String, email: String, password: String): Auth

# saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
saveBook(authors: [String], description: String, title: String, bookId: ID, link: String): User
#removeBook: Accepts a book's bookId as a parameter; returns a User type.
removeBook(bookID: ID): User

}



`;

module.exports = typeDefs;


//second note to self: use different branches for shit to get used to it.

//note to self: look at the original code and server and study it. this advice is also in the readme.