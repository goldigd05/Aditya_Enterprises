const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    company: { type: String },
    rating: { type: Number, required: true, min: 1, max: 5 },
    message: { type: String, required: true },
    isApproved: { type: Boolean, default: false } // admin moderation ready
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);
