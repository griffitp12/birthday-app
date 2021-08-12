import "dotenv/config";
import pkg from "knex";

const { knex } = pkg;

const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL || {
    host: "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: "migrations",
    directory: "./server/migrations",
  },
  seeds: {
    directory: "./server/seeds",
  },
});

export default db
