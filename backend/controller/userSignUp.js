const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

async function SignUpController(req, res) {
    try {
        const { email, password, name } = req.body;  // Destructure as an object
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        if (!name) {
            throw new Error("Please provide name");
        }

        const salt = await bcrypt.genSalt(10);  // Use await with bcrypt.genSalt
        const hashPassword = await bcrypt.hash(password, salt);  // Use await with bcrypt.hash

        if (!hashPassword) {
            throw new Error("Something is wrong");
        }

        const payload = {
            ...req.body,
            password: hashPassword
        };

        const userData = new userModel(payload);

        const saveUser = await userData.save();  // Call save as a function and await

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully"
        });
    } catch (error) {
        res.status(400).json({  // Set status code for error response
            message: error.message,  // Use error.message for the error message
            error: true,
            success: false
        });
    }
}

module.exports = SignUpController;
