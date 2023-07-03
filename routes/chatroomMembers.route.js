const express = require('express')
const router = express.Router()
const chatroomMembersController = require('../controllers/chatroomMembers.controller')

// TODO: Add middleware declaration here

// add route endpoint here
router.get('/chatroomMember', chatroomMembersController.getAllChatroomMember)
router.get('/chatroomMember/:chatroomMemberId', chatroomMembersController.getChatroomMemberById)
router.post('/chatroomMember', chatroomMembersController.createChatroomMember)
router.put('/chatroomMember/:chatroomMemberId', chatroomMembersController.updateChatroomMember)
router.delete('/chatroomMember/:chatroomMemberId', chatroomMembersController.deleteChatroomMember)

module.exports = router