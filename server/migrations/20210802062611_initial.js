exports.up = function (knex) {
  return knex.schema.createTable("default_questions", (table) => {
    table.increments().index();
    table.text("question").notNullable();
    table.integer("birthday").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("default_questions");
};
