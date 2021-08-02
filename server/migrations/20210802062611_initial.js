exports.up = function (knex) {
  return knex.schema.createTable("questions", (table) => {
    table.increments().index();
    table.text("question").notNullable();
    table.text("answer").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("questions");
};
