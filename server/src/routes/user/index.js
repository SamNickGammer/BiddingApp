const {Router} = require('express')
const router = new Router({mergeParams: true})

const me = require('./me')

router.use(me)

module.exports = router;