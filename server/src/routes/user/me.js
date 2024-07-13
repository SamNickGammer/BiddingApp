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
