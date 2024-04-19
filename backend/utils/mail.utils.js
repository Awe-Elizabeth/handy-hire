const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()

const transporter = nodemailer.createTransport({
    // configure your email service here
    // Example using Gmail:
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

exports.forgotPasswordMail = async(userEmail,host, token) => {
    const mailOptions = {
        from: 'handyhire.app@gmail.com',
        to: userEmail,
        subject: 'Password Reset',
        text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n`
            + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
            + `http://${host}/reset-password/${token}\n\n`
            + `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return 'Error sending email';
        } else {
            console.log('Email sent: ' + info.response);
            return 'Email sent';
        }
    });
}


