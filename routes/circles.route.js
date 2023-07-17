const express = require('express')
const router = express.Router()
const circlesController = require('../controllers/circles.controller')
const { verifyToken, checkRole } = require('../middlewares/auth.middlewares')

// TODO: Add middleware declaration here

// add route endpoint here

router.get('/', verifyToken, checkRole(['admin']), circlesController.getAllCircle)
router.get('/:creatorId', verifyToken, checkRole(['admin','user']), circlesController.getCirclesForUser)
router.post('/', verifyToken, checkRole(['admin','user']), circlesController.createCircle)
router.put('/:circleId', verifyToken, checkRole(['admin','user']), circlesController.updateCircle)
router.delete('/:circleId', verifyToken, checkRole(['admin','user']), circlesController.deleteCircle)

module.exports = router