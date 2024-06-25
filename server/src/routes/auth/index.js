const {Router} = require('express')

const router = new Router({mergeParams: true})

const auth = require('./auth')

router.use(auth)

module.exports = router;