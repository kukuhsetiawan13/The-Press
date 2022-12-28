const router = require('express').Router()
const {loginAuthentication, isAdmin} = require('../middlewares/authentication')
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')
const categoryRouter = require('./categoryRouter')
const tagRouter = require('./tagRouter')
const publicRouter = require('./publicRouter')
const Controller = require('../controllers')



router.get('', (req, res) => {
    res.redirect('/users')
})

router.use('/users', userRouter)

router.use('/pub', publicRouter)

// authentication middleware
router.use(loginAuthentication)

router.use('/news', newsRouter)

router.use('/categories', categoryRouter)

router.use('/tags', tagRouter)


module.exports = router