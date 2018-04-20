const { json } = require('micro');
const mail = require('./src/mail');
const User = require('./src/User');
const Email = require('./src/Email');
const UserEmail = require('./src/UserEmail');

const storeUser = async(user) => {
	return User.query().insert({name: user.name, email: user.email})
}
const storeEmail = async(email) => {
	return Email.query().insert({subject: email.subject, text: email.text})
}

module.exports = (req, res) => {	
	res.end('Welcome to Micro')
}