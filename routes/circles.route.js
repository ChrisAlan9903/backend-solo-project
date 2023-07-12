const express = require('express')
const router = express.Router()
const circlesController = require('../controllers/circles.controller')

// TODO: Add middleware declaration here

// add route endpoint here

router.get('/', circlesController.getAllCircle)
router.get('/:creatorId', circlesController.getCirclesForUser)
router.post('/', circlesController.createCircle)
router.put('/:circleId', circlesController.updateCircle)
router.delete('/:circleId', circlesController.deleteCircle)

module.exports = router