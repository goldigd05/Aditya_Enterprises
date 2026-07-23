require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const Review = require('../models/Review');

// Reuses the same dummy data used on the frontend (assets/data/*.json)
// so the DB has matching content once the backend is switched on.
const products = require('../../frontend/src/assets/data/products.json');
const reviews = require('../../frontend/src/assets/data/reviews.json');

const seed = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    await Review.deleteMany();

    const productsToInsert = products.map(({ id, ...rest }) => rest);
    const reviewsToInsert = reviews.map(({ id, date, ...rest }) => ({ ...rest, isApproved: true }));

    await Product.insertMany(productsToInsert);
    await Review.insertMany(reviewsToInsert);

    console.log('Database seeded successfully with dummy products & reviews!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

seed();
