const express = require('express')
const router = express.Router()
const circleMembersController = require('../controllers/circleMembers.controller')

// TODO: Add middleware declaration here

// add route endpoint here
router.get('/circleMember', circleMembersController.getAllCircleMembers)
router.post('/circleMember', circleMembersController.createCircleMembers)
router.put('/circleMember/:circleMemberId', circleMembersController.updateCircleMembers)
router.delete('/circleMember/:circleMemberId', circleMembersController.deleteCircleMembers)


module.exports = router