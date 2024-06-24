const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (err) {
        console.error("Database Error Message: ", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
