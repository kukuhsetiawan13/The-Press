const router = require('express').Router()
const Controller = require('../controllers')

router.get('', Controller.fetchTags)


module.exports = router