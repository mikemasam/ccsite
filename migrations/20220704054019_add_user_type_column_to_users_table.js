exports.up = function(knex) {
  return knex.schema.table('users', table => {
    table.integer('user_type').default(0);
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('user_type');
  })
};
