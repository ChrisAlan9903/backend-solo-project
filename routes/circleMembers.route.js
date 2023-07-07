const express = require('express')
const router = express.Router()
const circleMembersController = require('../controllers/circleMembers.controller')

// TODO: Add middleware declaration here

// add route endpoint here
router.get('/', circleMembersController.getAllCircleMembers)
router.get('/:circleMemberId', circleMembersController.getCircleMemberById)
router.post('/', circleMembersController.createCircleMembers)
router.put('/:circleMemberId', circleMembersController.updateCircleMembers)
router.delete('/:circleMemberId', circleMembersController.deleteCircleMembers)


module.exports = router