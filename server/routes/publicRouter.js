const router = require('express').Router()
const Controller = require('../controllers')


router.get('/news', Controller.fetchNewsPublic)

router.get('/news/:newsId', Controller.getNewsById)

router.get('/categories', Controller.fetchCategories)



module.exports = router