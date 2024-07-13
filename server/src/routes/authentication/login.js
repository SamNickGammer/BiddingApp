const express = require('express');
const jwt = require('jsonwebtoken');
const { Success, BadRequest, InternalServerError  } = require("../../helper/handleResponse");
const User = require('../../models/User'); // Ensure the correct path to the User model
const { JWT_SECRET } = require('../../config/env');
const { signJWT } = require('../../helper/jwtFns');

const router = express.Router();


router.post('/login', async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone) {
        return BadRequest(res, "Phone number is required", 400);
    }
    if (!otp) {
        return BadRequest(res, "OTP is required", 400);
    }

    try {
        const user = await User.findOne({ phone });

        if (!user) {
            return BadRequest(res, "Phone number is not registered", 404);
        }

        // Assume OTP validation happens here. Replace "123456" with your OTP logic.
        if (otp === "123456") {
            // Create JWT token
            const jwtToken = await signJWT({ ...user,user_id: user._id } );

            // Return user data and token
            console.log({ user, jwtToken });
            return Success(res, { user, jwtToken });
        }

        return BadRequest(res, "Invalid OTP", 401);
    } catch (error) {
        console.error(error);
        return InternalServerError(res, "An error occurred while checking the phone number");
    }
});

module.exports = router;
