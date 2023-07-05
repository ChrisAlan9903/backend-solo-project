const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')
const { verifyToken, checkRole } = require('../middlewares/auth.middleware')

// TODO: Add middleware declaration here

// add route endpoint here

router.get('/',verifyToken, checkRole(["admin","user"]), usersController.getAllUsers)

router.get('/:userId',verifyToken, checkRole(["admin","user"]), usersController.getUserById)

router.post('/',verifyToken, checkRole(["admin"]), usersController.createUser)

router.put('/:userId',verifyToken, checkRole(["admin","user"]), usersController.updateUser)

router.delete('/:userId',verifyToken, checkRole(["admin","user"]), usersController.deleteUser)


module.exports = router