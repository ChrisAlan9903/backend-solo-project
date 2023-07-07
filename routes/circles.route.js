const express = require('express')
const router = express.Router()
const circlesController = require('../controllers/circles.controller')
const { verifyToken } = require('../middlewares/auth.middleware')

// TODO: Add middleware declaration here

// add route endpoint here

router.get('/',verifyToken, circlesController.getAllCircle)
router.post('/',verifyToken, circlesController.createCircle)
router.put('/:circleId',verifyToken, circlesController.updateCircle)
router.delete('/:circleId',verifyToken, circlesController.deleteCircle)

module.exports = router