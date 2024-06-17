const {Router} = require('express')

const router = new Router({mergeParams: true})

const getTime = require('./getTime')

router.use(getTime)

module.exports = router;