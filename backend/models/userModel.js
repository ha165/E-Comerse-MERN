const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    profilePic: String
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel