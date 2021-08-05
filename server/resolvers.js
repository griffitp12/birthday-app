const db = require("./knexDB");

const resolvers = {
  Query: {
    allDefaultQuestions: () => {
      return db
        .select("*")
        .from("default_questions")
        .then((data) => {
          return data;
        });
    },
  },
};

module.exports = resolvers;
