const express = require('express')
const {Success, InternalServerError} = require("../../helper/handleResponse");
const User = require("../../models/User");

const router = express.Router()

router.post('/register', async (req, res) => {
    const {name, email, phone, address, city, state, country, pincode, photo, pan, aadhar} = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }

        // Create a new user
        user = new User({
            name,
            email,
            phone,
            address,
            city,
            state,
            country,
            pincode,
            photo,
            pan,
            aadhar
        });

        await user.save();

        return Success(res, {user})
    } catch (error) {
        console.error(error.message);
        return InternalServerError(res, "An error occurred while registration");
    }

})


module.exports = router;