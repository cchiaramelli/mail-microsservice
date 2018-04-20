const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'microsservicetester@gmail.com',
        pass: 'limas123',
    }
});

const sendEmail = async(email, users) => {

	users.forEach(user => {

		let mailOptions = {
		    from: 'microsservicetester@gmail.com',
		    to: user.email,
		    subject: email.subject,
		    text: email.text,
		};

	    transporter.sendMail(mailOptions, (error, info) => {
	        if (error) {
	            return console.log(error);
	        }
	        //Else, link this email to this user

	    });
	})
}

module.exports = { sendEmail }