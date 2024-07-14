const express = require('express')
const {Success, NotFound} = require("../../helper/handleResponse");
const {authUser} = require("../../middleware/auth");
const User = require("../../models/User");

const router = express.Router()

router.get('/me', authUser, async (req, res) => {
    const userId = req.user.user_id
    console.log(req.user)

    const user = await User.findById(userId);
    if (!user) {
        return NotFound(res, "You are not registered user");
    }

    return Success(res, {user});
})

module.exports = router;