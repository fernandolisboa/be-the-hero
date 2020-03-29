const knex = require('knex');
const configuration = require('../../knexfile');

const env = process.env.NODE_ENV;
const db = configuration[env] || configuration.development;

const connection = knex(db);

module.exports = connection;
