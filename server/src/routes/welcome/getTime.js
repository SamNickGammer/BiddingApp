const express = require('express')

const router = express.Router()

router.get('/get-time', async (req, res) => {
    const date = new Date()
    res.json({date: date.toLocaleString('en-US', {timeZone: 'Asia/Kolkata', hour12: true})});
})

module.exports = router;
