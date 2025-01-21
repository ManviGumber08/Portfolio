const express = require('express');
const router = express.Router();
const Message = require('../models/Message'); // Ensure this import is correct

// POST endpoint to handle form submission
router.post('/send', async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received data:", { name, email, message });

  try {
    // Create and save the message to the database
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save(); // Save the message to the database
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
});

module.exports = router;
