const nodemailer = require('nodemailer');

module.exports = (reciever, subject, article) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_APP_PASS,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: reciever,
        subject: subject,
        html: article
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            // do something useful
        }
    });
}