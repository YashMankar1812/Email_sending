const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Adjust the import path if necessary
const mailRoutes = require('./routes/mailRoutes.js'); // Adjust the path if necessary
const fotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000; 

// Connect to MongoDB
mongoose.connect( process.env.mongoDbUrl,
{ useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected...'))
 .catch(err => console.log(err));

  

 require('dotenv').config();


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/mail', mailRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
