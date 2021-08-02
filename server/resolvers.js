const db = require("./knexDB");

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
};

module.exports = resolvers;
