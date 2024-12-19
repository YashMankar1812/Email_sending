const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mankaryashwant11@gmail.com',
        pass: 'your-email-password', 
    },
});

module.exports = transporter;
