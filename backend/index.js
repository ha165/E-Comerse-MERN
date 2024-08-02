const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index");

const app = express();

// Middleware
app.use(cors());  // Correctly use the CORS middleware
app.use(express.json());  // Add to parse JSON request bodies
app.use("/api", router);

// PORT assignment
const PORT = process.env.PORT || 8080;  // Correctly use environment variable or fallback

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
 