import db from "../../knexDB"

export default {
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


