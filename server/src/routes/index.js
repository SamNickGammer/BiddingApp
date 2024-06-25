const {Router} = require('express');

const router = new Router({mergeParams: true});

const welcome = require('./welcome')
const auth = require('./auth')

router.use('/welcome', welcome)
router.use('/auth', auth)

module.exports = router;
