const express = require('express');

//import users controllers
const postsController = require('../controllers/posts-controller');

const router = express.Router();

router.post("/feed", postsController.feed);
// Add a route for liking a post
router.post('/like', postsController.like);

router.post('/dislike', postsController.dislike);
router.post('/cancel-like', postsController.cancelLike);

router.get('/like-count/:post_id', postsController.getUpdatedLikeCount);

module.exports = router;
