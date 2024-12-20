import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

 const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.FROM, // Your email
        pass: process.env.PASSWORD, // Your email password or app-specific password
    }
});

// Function to send an email
export const sendMail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.FROM,  
        to,                            
        subject,                       
        text                           
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email: ', error);
        return { success: false, message: 'Error sending email' };
    }
};
