exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("questions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("questions").insert([
        { question: "What do you want to be when you grow up?", answer: "" },
        { question: "Who is your best friend?", answer: "" },
        { question: "What is something that's scary for you?", answer: "" },
        { question: "What do you like to do outside?", answer: "" },
        { question: "When is your birthday?", answer: "" },
        { question: "Why are you doing this right now?", answer: "" },
      ]);
    });
};
