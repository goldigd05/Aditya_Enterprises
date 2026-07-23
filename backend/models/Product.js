const mongoose = require('mongoose');

const specificationSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: [
        'Door Handles', 'Door Hinges', 'Door Drop Seal', 'Door Seal',
        'Electric Magnet Lock', 'Door Closer', 'Glass Fittings',
        'Mortise Locks', 'Cabinet Handles', 'Accessories'
      ]
    },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    images: [{ type: String }],
    specifications: [specificationSchema],
    features: [{ type: String }],
    badge: { type: String },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
