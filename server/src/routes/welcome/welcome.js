const express = require('express')
const {Success} = require("../../helper/handleResponse");
const { APP_VERSION } = require('../../config/env');

const router = express.Router()

router.get('/', async (req, res) => {
    const data = {
        date: new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata', hour12: true}),
        version: APP_VERSION
    }
    return Success(res, {...data})
})

router.get('/get-time', async (req, res) => {
    const date = new Date()
    res.json({date: date.toLocaleString('en-US', {timeZone: 'Asia/Kolkata', hour12: true})});
})

module.exports = router;
