const express = require("express");
const { registerUser, authUser } = require('../controllers/userController');
const validateLogin = require("../middleware/validateLogin");
const validateRegister = require("../middleware/validateRegister");
const router = express.Router();

// check validation with validate middleware
router.route("/").post(validateRegister, registerUser);
router.post("/login", validateLogin, authUser);

module.exports = router;