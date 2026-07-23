const express = require('express');
const router = express.Router();
const {
  getReviews, createReview, getAllReviewsAdmin, updateReview, deleteReview
} = require('../controllers/reviewController');
const { protect } = require('../middleware/auth');

router.get('/', getReviews);
router.post('/', createReview);

// Admin-protected routes
router.get('/all', protect, getAllReviewsAdmin);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;
