const db = require("./knexDB");

const resolvers = {
  Query: {
    allQuestions: () => {
      return db
        .select("*")
        .from("questions")
        .then((data) => {
          return data;
        });
    },
  },
};

module.exports = resolvers;
