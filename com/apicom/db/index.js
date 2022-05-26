import knex from 'knex'
const database = knex({
  client: 'mysql2',
  connection: {
    host : process.env.DBHOST || '127.0.0.1',
    user : process.env.DBUSER,
    password : process.env.DBPASSWORD,
    database : process.env.DBNAME
  }
});
export default database;

export const paginate = async (db, page, per_page = 15) => {
  const count = await db.clone().count({ total: "*" }).first();
  db.offset((page || 0) * per_page).limit(per_page);
  return { total: Number(count.total), page: Number(page), per_page: Number(per_page) };
}
