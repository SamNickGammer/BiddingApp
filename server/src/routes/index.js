const {Router} = require('express');

const router = new Router({mergeParams: true});

const welcome = require('./welcome')
const authentication = require('./authentication')

router.use('/welcome', welcome)
router.use('/auth', authentication)

module.exports = router;
