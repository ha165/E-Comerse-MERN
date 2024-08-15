const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index");
const cookieParser = require('cookie-parser')


const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials : true
}));
app.use(express.json());
app.use(cookieParser())
app.use("/api", router);

// PORT assignment
const PORT = process.env.PORT || 8080;

// Connect to the database and start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB`);
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error(`Failed to connect to DB: ${error.message}`);
    });
