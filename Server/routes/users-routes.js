const express = require('express');

//import users controllers
const usersController = require('../controllers/users-controller');

const router = express.Router();

router.post("/register", usersController.register);

// router.post(
// 	"/signup",
// 	[
// 		check("fullname").not().isEmpty(),
// 		check("email").normalizeEmail().isEmail(),
// 		check("password").isLength({ min: 6 }),
// 		check("shippingAddress").not().isEmpty(),
// 		check("phone").not().isEmpty(),
// 	],
// 	signup
// );

// router.post("/login", login);

module.exports = router;
