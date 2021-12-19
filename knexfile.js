// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'tasks',
    user:     'postgres',
    password: '123456'
  },
  pool: {
    min: 2,
    max: 6
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
