const express = require('express')
const router = express.Router()
const chatroomsController = require('../controllers/chatrooms.controller')

// TODO: Add middleware declaration here

// add route endpoint here
router.get('/chatrooms', chatroomsController.getAllChatrooms)
router.get('/chatrooms/:chatroomId', chatroomsController.getChatroomById)
router.post('/chatrooms', chatroomsController.createChatrooms)
router.put('/chatrooms/:chatroomId', chatroomsController.updateChatrooms)
router.delete('/chatrooms/:chatroomId', chatroomsController.deleteChatrooms)


module.exports = router