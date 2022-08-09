const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
    {
        walletaddress: {
            type: String,
            required: true,
        },
        requesttype: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);



const transaction = mongoose.model("transaction", transactionSchema);

module.exports = transaction;