const asyncHandler = require("express-async-handler");
const transaction = require("../models/transactionModel.js");


// Get transaction history
const transactionHistory = asyncHandler(async (req, res) => {
    const filter = {}
    const data = await transaction.find(filter);

    if (data) {
        res.json(data);
    } else {
        res.status(401);
        throw new Error("Error!!!");
    }

});


// make new transaction
const createTransaction = asyncHandler(async (req, res) => {
    const { walletaddress, requesttype, amount, time } = req.body;

    // create new transaction
    const newTransaction = await transaction.create({
        walletaddress,
        requesttype,
        amount,
        time,
    });

    // send response
    if (newTransaction) {
        res.status(201).json({
            _id: newTransaction._id,
            walletaddress: newTransaction.walletaddress,
            requesttype: newTransaction.requesttype,
            amount: newTransaction.amount,
            time: newTransaction.time,
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }

});

module.exports = { transactionHistory, createTransaction };