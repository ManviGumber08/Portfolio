const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const messagesRouter = require('./routes/messages'); // Import your messages route

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Middleware to parse JSON

// Routes
app.use('/api/messages', messagesRouter); // Register your route for '/api/messages'

// Database connection (use your MongoDB URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
