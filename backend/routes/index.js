const express = require("express");
const SignUpController = require("../controller/userSignUp");
const { body, validationResult } = require("express-validator");
const userSignInController = require("../controller/userSignIn");
const userDetailsController = require("../controller/userDetails")
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const router = express.Router();


const validateSignUp = [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().withMessage('Name is required')
];
router.post("/signup", validateSignUp, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            success: false,
            message: 'Validation failed'
        });
    }
    SignUpController(req, res, next);
});
router.post("/signin", userSignInController)

router.get("/user-details", authToken, userDetailsController)
router.get("/userlogout", userLogout)
module.exports = router;
