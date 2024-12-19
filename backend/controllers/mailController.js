const transporter = require('../config/nodemailerConfig');

exports.sendMail = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: `Message from ${name}`,    
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
};
