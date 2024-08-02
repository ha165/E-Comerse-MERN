const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');


async function SignUpController(req, res) {
    try {
        const [email, password, name] = req.body
        if (!email) {
            throw Error("Please provide email")
        }
        if (!password) {
            throw Error("Please provide password")
        }
        if (!name) {
            throw Error("Please provide name")
        }


        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            password: hashPassword
        }

        const userData = new userModel(payload)

        const saveUser = userData.save

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully"
        })
    } catch (error) {
        res.json({
            message: error,
            error: true,
            success: false
        })
    }
}

modules.exports = SignUpController