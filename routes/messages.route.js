const express = require('express')
const router = express.Router()
const messagesController = require('../controllers/messages.controller')

// TODO: Add middleware declaration here

// add route endpoint here
router.get('/', messagesController.getAllMessages)
router.get('/:messageId', messagesController.getMessageById)
router.post('/', messagesController.createMessage)
router.put('/:messageId', messagesController.updateMessage)
router.delete('/:messageId', messagesController.deleteMessage)

module.exports = router