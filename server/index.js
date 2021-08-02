require("dotenv").config();
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { ApolloServer } = require('apollo-server-express');
const server = new ApolloServer({ typeDefs, resolvers});

const express = require("express")
const app = express();

const path = require('path');
const publicPath = path.resolve("dist");
console.log(publicPath);
app.use(express.static(path.resolve(publicPath)));
server.applyMiddleware({ app })

const db = require("./knex");

const startServer = async function() { 
    try {
        console.log("running migrations");
        await db.migrate.latest();
        await db.seed.run();
        console.log("starting express server")
        app.listen( { port: process.env.PORT || 4000}, () => {
            console.log(
                `Express server listening on port ${process.env.PORT || 4000}`
              )
        })
    } catch (err) {
        console.error("Error starting app:", err);
        process.exit(-1) // what does this do?
    }
}

startServer();