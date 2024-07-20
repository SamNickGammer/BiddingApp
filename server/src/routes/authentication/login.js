const express = require('express');
const {Success, BadRequest, InternalServerError, NotFound, Unauthorized} = require("../../helper/handleResponse");
const User = require('../../models/User'); // Ensure the correct path to the User model
const {signJWT} = require('../../helper/jwtFns');

const router = express.Router();


router.post('/login', async (req, res) => {
    const {phone, otp} = req.body;

    if (!phone) {
        return BadRequest(res, "Phone number is required");
    }
    if (!otp) {
        return BadRequest(res, "OTP is required");
    }

    try {
        const user = await User.findOne({phone});

        if (!user) {
            return NotFound(res, "Phone number is not registered");
        }

        if (otp === "123456") {
            const jwtToken = await signJWT({...user, user_id: user._id});
            return Success(res, {user, jwtToken});
        }

        return Unauthorized(res, "Invalid OTP");
    } catch (error) {
        console.error(error);
        return InternalServerError(res, "An error occurred while checking the phone number");
    }
});

module.exports = router;
