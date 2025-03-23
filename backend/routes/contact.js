const express = require('express');
const router = express.Router();
const Contact = require('../models/Schema'); // Ensure the Contact model is correctly defined and imported

// POST route to save contact form data
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

// GET route to retrieve all contacts (optional, for admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;