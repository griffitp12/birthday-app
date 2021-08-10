/* require("dotenv").config(); */
/* const typeDefs = require("./graphql/schema"); */
import { defaultQuestionsResolvers } from "./graphql/resolvers/defaultQuestionsResolvers";
import { ApolloServer } from "apollo-server-express";

console.log(defaultQuestionsResolvers)

const express = require("express");
const app = express();

const db = require("./knexDB");

const startServer = async function () {
  try {
    console.log("running migrations");
    await db.migrate.latest();
    await db.seed.run();
    console.log("starting express server");
    const server = new ApolloServer({
      schema: await buildSchema({
        resolvers: [defualtQuestionsResolvers],
      }),
    });
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
