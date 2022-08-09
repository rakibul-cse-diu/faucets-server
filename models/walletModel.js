const mongoose = require("mongoose");

const walletsSchema = mongoose.Schema(
    {
        img: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const wallets = mongoose.model("wallets", walletsSchema);

module.exports = wallets;