const asyncHandler = require("express-async-handler");
const wallets = require("../models/walletModel");


// get all wallet
const walletData = asyncHandler(async (req, res) => {
    const filter = {}
    const data = await wallets.find(filter);

    if (data) {
        res.json(data);
    } else {
        res.status(401);
        throw new Error("Error!!!");
    }

});


module.exports = { walletData };