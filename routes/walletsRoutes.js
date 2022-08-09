const express = require("express");
const { walletData } = require('../controllers/walletsController');



const router = express.Router();

router.route("/").get(walletData);

module.exports = router;