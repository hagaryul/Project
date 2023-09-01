const express = require('express');

//import users controllers
const postsController = require('../controllers/posts-controller');

const router = express.Router();

router.post("/feed", postsController.feed);

module.exports = router;
