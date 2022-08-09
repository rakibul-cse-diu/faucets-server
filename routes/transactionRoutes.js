const express = require("express");
const { transactionHistory, createTransaction } = require("../controllers/transactionController");
const validateTransaction = require("../middleware/validateTransaction");
const router = express.Router();

router.route("/").post(createTransaction, validateTransaction);
router.get("/history", transactionHistory, validateTransaction);

module.exports = router;