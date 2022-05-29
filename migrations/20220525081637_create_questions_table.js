exports.up = function(knex) {
  return knex.schema.createTable('questions', table => {
    table.increments('id');
    table.text('content');
    table.integer('user_id');
    table.integer('status').default(0);
    table.bigInteger('created_at');
    table.bigInteger('updated_at');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("questions");
};
