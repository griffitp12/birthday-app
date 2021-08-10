require("dotenv").config();
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const { ApolloServer } = require("apollo-server-express");
const server = new ApolloServer({ typeDefs, resolvers });

const express = require("express");
const app = express();

const db = require("./knexDB");

const startServer = async function () {
  try {
    console.log("running migrations");
    await db.migrate.latest();
    await db.seed.run();
    console.log("starting express server");
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: process.env.PORT || 4000 }, () => {
      console.log(
        `Express server listening on port ${process.env.PORT || 4000}`
      );
    });
  } catch (err) {
    console.error("Error starting app:", err);
    process.exit(-1); // what does this do?
  }
};

startServer();
