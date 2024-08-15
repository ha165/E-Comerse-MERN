const bcrypt = require("bcryptjs")
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }
        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User Not Found")
        }

        const checkpassword = await bcrypt.compare(password, user.password)

        if (checkpassword) {
            const tokenData = {
                _id: user.id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 2 });
            const tokenoption = {
                httponly: true,
                secure: true
            }
            res.cookie("token", token, tokenoption).json({
                message: "Login Successfully",
                data: token,
                success: true,
                error: false
            })

        } else {
            throw new Error("Please Check The password")
        }

    } catch (error) {
        res.status(400).json({  // Set status code for error response
            message: error.message,
            error: true,
            success: false
        });
    }
}

module.exports = userSignInController