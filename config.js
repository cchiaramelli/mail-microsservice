var knexfile = require('./knexfile.js');
var knexConfig = process.env.NODE_ENV || 'development';

var knex = require('knex')(knexfile[knexConfig]);

console.log('Using', knexfile[knexConfig])

module.exports = knex;