const { json } = require('micro');
const mail = require('./src/mail');
const User = require('./src/User');
const Email = require('./src/Email');
const UserEmail = require('./src/UserEmail');

module.exports = (req, res) => {	
	res.end('Welcome to Micro')
}