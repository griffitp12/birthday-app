import "dotenv/config"
import { knex } from "knex"

export default db = knex({
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

/* module.exports = db; */
