const express = require('express')
const router = express.Router()
const userRelController = require('../controllers/usersRelationship.controller')

// TODO: Add middleware declaration here

// add route endpoint here

router.get('/', userRelController.getAllUserRel)
router.get('/:userRelId', userRelController.getUserRelById)
router.post('/', userRelController.createUserRel)
router.put('/:userRelId', userRelController.updateUserRel)
router.delete('/:userRelId', userRelController.deleteUserRel)

module.exports = router