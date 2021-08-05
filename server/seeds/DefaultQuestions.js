exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("default_questions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("default_questions").insert([
        { question: "What do you want to be when you grow up?", birthday: 5 },
        { question: "Who is your best friend?", birthday: 5 },
        { question: "What is something that's scary for you?", birthday: 5 },
        { question: "What do you like to do outside?", birthday: 5 },
        { question: "When is your birthday?", birthday: 5 },
        { question: "Why are you doing this right now?", birthday: 5 },
      ]);
    });
};
