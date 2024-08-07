const bcrypt = require("bcryptjs")

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

        if(!user){
            throw new Error("User Not Found")
        }

        const checkpassword = bcrypt.compare(password,user.password)

        console.log("check password",checkpassword)

    } catch (error) {
        res.status(400).json({  // Set status code for error response
            message: error.message,
            error: true,
            success: false
        });
    }
}

module.exports = userSignInController