const db = require("./knex");

const resolvers = {
  Query: {
    allQuestions: () => {
      return db
        .select("*")
        .from("notes")
        .then((data) => {
          return data;
        });
    },
  },

  Mutation: {
    addNote: (parent, args) => {
      return db("notes")
        .insert({ title: args.title, body: args.body })
        .then((data) => {
          console.log("res data:", data);
          return;
        });
    },
  },
};

module.exports = resolvers;
