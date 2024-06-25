const express = require('express')
const {Success} = require("../../helper/handleResponse");

const router = express.Router()

router.post('/login', async (req, res) => {
    const data = {
        date: new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata', hour12: true}),
        version: process.env.APP_VERSION
    }
    return Success(res, {...data})
})

router.post('/register', async (req, res) => {
    const date = new Date()
    res.json({date: date.toLocaleString('en-US', {timeZone: 'Asia/Kolkata', hour12: true})});
})

module.exports = router;
