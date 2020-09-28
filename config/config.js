require('dotenv').config();
module.exports = {
  development: {
    "username": process.env.DEV_USER,
    "password": process.env.DEV_PASS,
    "database": process.env.DEV_DATABASE,
    "host": process.env.DEV_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
