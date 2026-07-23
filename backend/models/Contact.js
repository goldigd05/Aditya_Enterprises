const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    company: { type: String },
    productInterested: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' } // admin queue ready
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
