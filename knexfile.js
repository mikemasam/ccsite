// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config({ path: ".env.local" });

const KnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host : process.env.DBHOST || '127.0.0.1',
      user : process.env.DBUSER,
      password : process.env.DBPASSWORD,
      database : process.env.DBNAME,
      dateStrings: true
    },
    pool: { 
      min: 0, 
      max: 7,
      idleTimeoutMillis: 10000,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host : process.env.DBHOST || '127.0.0.1',
      user : process.env.DBUSER,
      password : process.env.DBPASSWORD,
      database : process.env.DBNAME,
      dateStrings: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

module.exports = KnexConfig;
