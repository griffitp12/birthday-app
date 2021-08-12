import db from "../../knexDB.js"

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

export default resolvers