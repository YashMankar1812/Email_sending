


// index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import  routes  from './routes/mailRoutes.js';  // Ensure the correct file path
import  mongoose  from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin:"https://email-sending-lac.vercel.app"
}));

// Mongoose DataBase 
console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Correctly register the contact router middleware for '/contact' route
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
