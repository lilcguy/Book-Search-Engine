const express = require('express');
const path = require('path');
const db = require('./config/connection');
//const routes = require('./routes'); commented out for now: may not be necessary
const { ApolloServer } = require('apollo-server-express'); //importing apollo server
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require ('./schemas'); //importing 

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({ //creating server variable from apollo server
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: true })); //express middleware
app.use(express.json()); //express middleware

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});
  db.once('open', () => {
    app.listen(PORT, () => 
    console.log(`🌍 Now listening on localhost:${PORT}`));
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

//app.use(routes); commented out for now: may not be necessary


//starts server
startApolloServer(typeDefs, resolvers);