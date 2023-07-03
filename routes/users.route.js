const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')

// TODO: Add middleware declaration here

// add route endpoint here

router.get('/', usersController.getAllUsers)

router.get('/:userId', usersController.getUserById)

router.post('/', usersController.createUser)

router.put('/:userId', usersController.updateUser)

router.delete('/:userId', usersController.deleteUser)


module.exports = router