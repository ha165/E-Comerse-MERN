const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,  // Ensure email is stored in lowercase
        match: [/.+@.+\..+/, 'Please enter a valid email address']  // Simple email regex validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6  // Ensure password has at least 6 characters
    },
    profilePic: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("Users", userSchema);  // Use a capitalized model name

module.exports = userModel;
  