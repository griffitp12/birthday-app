exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("users", (table) => {
      table
        .uuid("user_id")
        .unique()
        .notNullable()
        .defaultTo(knex.raw("gen_random_uuid()"))
        .primary();
      table.text("username").notNullable();
      table.text("email").notNullable();
    }),
    knex.schema.createTable("children", (table) => {
      table
        .uuid("child_id")
        .unique()
        .notNullable()
        .defaultTo(knex.raw("gen_random_uuid()"))
        .primary();
      table.text("name").notNullable();
      table.date("birthday").notNullable();
      table.text("pronouns").notNullable();
      table.uuid("parentID").references("user_id").inTable("users");
    }),
    knex.schema.createTable("capsules", (table) => {
      table
        .uuid("capsule_id")
        .unique()
        .notNullable()
        .defaultTo(knex.raw("gen_random_uuid()"))
        .primary();
      table.integer("capsule_bd").notNullable();
      table.uuid("child_id").references("child_id").inTable("child");
    }),
    knex.schema.createTable("questions", (table) => {
      table
        .uuid("question_id")
        .unique()
        .notNullable()
        .defaultTo(knex.raw("gen_random_uuid()"))
        .primary();
      table.text("question").notNullable();
      table.text("answer").notNullable();
      table.uuid("capsule_id").references("capsule_id").inTable("capsules");
    }),
  ]);
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("children")
    .dropTableIfExists("capsules")
    .dropTableIfExists("questions");
};
