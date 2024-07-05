const express = require('express')
const {Success} = require("../../helper/handleResponse");

const router = express.Router()

router.post('/login', async (req, res) => {
    const user = req.body;
    return Success(res, user)
    
})


module.exports = router;