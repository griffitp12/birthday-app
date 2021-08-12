/* require("dotenv").config(); */
/* const typeDefs = require("./graphql/schema"); */
import  typeDefs  from "./graphql/schema.js";
import  resolvers  from "./graphql/resolvers/allResolvers.js"
import { ApolloServer } from "apollo-server-express";
import express from "express"
import db from "./knexDB.js"

const app = express();

const startServer = async function () {
  try {
    console.log("running migrations");
    await db.migrate.latest();
   /*  await db.seed.run(); */
    console.log("starting express server");
    const server = new ApolloServer({ typeDefs, resolvers});
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
