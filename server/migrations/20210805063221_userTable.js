
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments().index();
        table.text("username").notNullable();
        table.text("email").notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
