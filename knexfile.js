// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    version: "5.7",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "nerdolandia",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory:"./src/database/seeds",
    },
  },
};
