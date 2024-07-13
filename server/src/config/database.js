const mongoose = require('mongoose');
const { MONGO_URI } = require('./env');
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (err) {
        console.error("Database Error Message: ", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
