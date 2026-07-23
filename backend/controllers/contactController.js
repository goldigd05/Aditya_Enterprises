const Contact = require('../models/Contact');
const { sendContactEmail } = require('../config/mailer');

// @desc    Submit contact form (saves to DB + sends email via Nodemailer)
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    // Send notification email (fails silently if SMTP not configured yet)
    try {
      await sendContactEmail(req.body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you shortly.',
      data: contact
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all contact queries (admin only)
// @route   GET /api/contact
// @access  Private/Admin
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update contact status (admin only)
// @route   PUT /api/contact/:id
// @access  Private/Admin
exports.updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!contact) return res.status(404).json({ success: false, message: 'Contact query not found' });
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
