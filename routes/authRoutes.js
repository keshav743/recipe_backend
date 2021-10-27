const express = require("express");
var router = express.Router();

const authController = require("../controllers/authControllers.js");

router.post("/signup", authController.signupController);
router.post("/login", authController.loginController);

module.exports = router;
