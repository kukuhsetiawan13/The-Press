const router = require('express').Router()
const Controller = require('../controllers')
const {loginAuthentication, isAdmin} = require('../middlewares/authentication')


// login 
router.post('/login', Controller.login)


router.use(loginAuthentication)
// register
router.post('/register', isAdmin, Controller.register)


module.exports = router