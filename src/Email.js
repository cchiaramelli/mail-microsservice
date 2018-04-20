const { Model } = require('objection');
const knex = require('../config');

Model.knex(knex);

class Email extends Model {

	static get tableName(){
		return 'email'
	}
}

module.exports = Email