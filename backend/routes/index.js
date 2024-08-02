const express = require("express");
const SignUpController = require("../controller/userSignUp");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Validation middleware
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

module.exports = router;
