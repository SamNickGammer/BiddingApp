const {Router} = require('express')
const router = new Router({mergeParams: true})

const login = require('./login')
const signUp = require('./signUp')

router.use(login)
router.use(signUp)

module.exports = router;