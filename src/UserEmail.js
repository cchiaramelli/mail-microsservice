const { Model } = require('objection');
const knex = require('../config');

Model.knex(knex);

class UserEmail extends Model {

	static get tableName(){
		return 'useremail'
	}
}

module.exports = UserEmail