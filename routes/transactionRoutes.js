const express = require("express");
const { transactionHistory, createTransaction } = require("../controllers/transactionController");
const validateTransaction = require("../middleware/validateTransaction");
const router = express.Router();

// check validation with validate middleware
router.route("/").post(validateTransaction, createTransaction);
router.get("/history", validateTransaction, transactionHistory);

module.exports = router;