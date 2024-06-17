const {Router} = require('express');

const router = new Router({mergeParams: true});

const welcome = require('./welcome')

router.use('/welcome', welcome)

module.exports = router;
