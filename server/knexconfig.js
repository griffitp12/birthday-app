// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1",
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
    },
    migrations: {
      tableName: "migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1",
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
    },
    migrations: {
      tableName: "migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1",
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
    },
    migrations: {
      tableName: "migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
