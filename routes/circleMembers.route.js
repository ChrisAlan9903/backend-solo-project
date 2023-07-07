const express = require('express')
const router = express.Router()
const circleMembersController = require('../controllers/circleMembers.controller')
const { verifyToken } = require('../middlewares/auth.middleware')


// TODO: Add middleware declaration here

// add route endpoint here
router.get('/circleMember', verifyToken, circleMembersController.getAllCircleMembers)
router.post('/circleMember', verifyToken, circleMembersController.createCircleMembers)
router.put('/circleMember/:circleMemberId', verifyToken, circleMembersController.updateCircleMembers)
router.delete('/circleMember/:circleMemberId', verifyToken, circleMembersController.deleteCircleMembers)


module.exports = router