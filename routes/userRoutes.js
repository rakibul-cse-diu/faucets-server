const express = require("express");
const { registerUser, authUser } = require('../controllers/userController');
const { validateRegister } = require("../middleware/validateRegister");
const { validateLogin } = require("../middleware/validateLogin");


const router = express.Router();

router.route("/").post(registerUser, validateRegister);


router.post("/login", authUser, validateLogin);

module.exports = router;