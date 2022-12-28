const router = require('express').Router()
const Controller = require('../controllers')
const {isAdmin} = require('../middlewares/authentication')


router.get('', Controller.fetchCategories)

router.get('/:categoryId', Controller.getCategoryById)

router.post('', Controller.addCategory)

router.put('/:categoryId', isAdmin, Controller.editCategory)

router.delete('/:categoryId', isAdmin, Controller.deleteCategory)


module.exports = router