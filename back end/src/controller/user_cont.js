const User = require('../models/user_models');
const catchAsyncError = require('../middlewares/catchAsyncError');
const ErrorHandler = require('../middlewares/ErrorMiddl');

// Register user
const registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        return next(new ErrorHandler("Please enter all fields", 400));
    }
    if (password.length < 8 || password.length > 16) {
        return next(new ErrorHandler("Password must be between 8 and 16 characters", 400));
    }

    // Check for duplicate email
    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(new ErrorHandler("User already exists with this email", 400));
    }

    // Create new user
    const newUser = await User.create({ name, email, password });

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }
    });
});

module.exports = registerUser;
