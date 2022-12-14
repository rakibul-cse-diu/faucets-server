const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");


// Auth the user
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // check encrypted password and send response
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }

});

// Register new user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, mobile } = req.body;

    // check user already exists or not
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(404);
        throw new Error("User already exists");
    }

    // create new user
    const user = await User.create({
        name,
        email,
        password,
        mobile,
    });

    // send response
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }

});

module.exports = { authUser, registerUser };