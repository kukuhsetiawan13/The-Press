const router = require('express').Router()
const Controller = require('../controllers')
const {isAuthorizedUser} = require('../middlewares/authentication')


router.get('', Controller.fetchNews)

router.get('/:newsId', Controller.getNewsById)

router.post('', Controller.addNews)

router.put('/:newsId', isAuthorizedUser, Controller.editNews)

router.delete('/:newsId', isAuthorizedUser, Controller.deleteNews)


module.exports = router