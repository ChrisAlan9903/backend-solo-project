const express = require('express')
const router = express.Router()
const messagesController = require('../controllers/messages.controller')

// TODO: Add middleware declaration here

// add route endpoint here
router.get('/', messagesController.getAllMessages)
router.get('/:senderId', messagesController.getAllMessagesByUser)
router.get('/message/:messageId', messagesController.getMessageById)
router.post('/', messagesController.createMessage)
router.put('/message/:messageId', messagesController.updateMessage)
router.delete('/message/:messageId', messagesController.deleteMessage)

module.exports = router

