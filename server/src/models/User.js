const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
    photo: { type: String, required: true },
    pan: { type: String, required: true },
    aadhar: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
