// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose'); // Adjust the import path if necessary
// const mailRoutes = require('./routes/mailRoutes.js'); // Adjust the path if necessary
// const dotenv = require('dotenv');
// const app = express();
// const PORT = process.env.PORT || 5000; 

// // Connect to MongoDB
// mongoose.connect( process.env.mongoDbUrl,
// { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('MongoDB connected...'))
//  .catch(err => console.log(err));

  

//  require('dotenv').config();


// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/mail', mailRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


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