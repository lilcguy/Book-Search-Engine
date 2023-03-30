const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Book { 
    bookId: #not to be confused with _id
    authors:
    description:
    title:
    image:
    link:

}

type User {
    _id: 
    username:
    email:
    bookCount:
    savedBooks: 

}

type Auth {
    token:
    user:


}


type Query { #queries that can be used are put into this object
    #me : which returns a User type
}

type Mutation { #mutations that can be used, i.e. changes to data, are put into this object.
# login: Accepts an email and password as parameters; returns an Auth type.

#addUser: Accepts a username, email, and password as parameters; returns an Auth type.

# saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

#removeBook: Accepts a book's bookId as a parameter; returns a User type.

}



`;

module.exports = typeDefs;

//note to self: look at the original code and server and study it. this advice is also in the readme.