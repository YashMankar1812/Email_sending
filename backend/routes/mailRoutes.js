

import express from 'express'; 
import {sendMail} from '../help/Mailer.js';
const router = express.Router();


router.get('/contact', (req, res) => {
    console.log("get");
    // res.send('Get all contacts');
  return res.json({
        status:true,
        message:'Request Successfully sent'
    })
});


router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const subject = `Contact form submission from ${name}`;
        const text = `You have a new message from ${name} (${email}): \n\n${message}`;
        const to = process.env.TO;

        const mailResponse = await sendMail(to, subject, text);

        if (mailResponse.success) {
           return res.status(200).send('Contact information submitted successfully');
        } else {
            return res.status(500).send('Error submitting contact information');
        }
    } catch (error) {
        console.error('Unexpected error:', error.message);
        return res.status(500).send('Internal server error');
    }
});

// 
// export const contact = router
export default router