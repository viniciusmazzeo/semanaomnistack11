const knex = require('knex');
const configuration = require('../../knexfile');

// Passo para ele as configurações de dev que está no arquivo knexfile
const connection = knex(configuration.development);

module.exports = connection;
