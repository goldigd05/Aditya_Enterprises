const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContact, getContacts, updateContactStatus } = require('../controllers/contactController');
const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('phone').trim().notEmpty().withMessage('Phone is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
  ],
  validate,
  submitContact
);

// Admin-protected routes
router.get('/', protect, getContacts);
router.put('/:id', protect, updateContactStatus);

module.exports = router;
