const express = require("express");
const { registerUser, authUser } = require('../controllers/userController');
const validateLogin = require("../middleware/validateLogin");
const validateRegister = require("../middleware/validateRegister");



const router = express.Router();

router.route("/").post(registerUser, validateRegister);


router.post("/login", authUser, validateLogin);

module.exports = router;