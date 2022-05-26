exports.up = function(knex) {
  return knex.schema.createTable('answers', table => {
    table.increments('id');
    table.text('content');
    table.integer('question_id');
    table.integer('user_id');
    table.integer('status').default(0);
    table.bigInteger('created_at');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("answers");
};
