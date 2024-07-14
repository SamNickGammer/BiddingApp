const {Router} = require('express');

const router = new Router({mergeParams: true});

const welcome = require('./welcome')
const authentication = require('./authentication')
const user = require('./user')

router.use('/welcome', welcome)
router.use('/auth', authentication)
router.use('/user', user)

module.exports = router;
