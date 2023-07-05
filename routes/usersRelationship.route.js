const express = require('express')
const router = express.Router()
const userRelController = require('../controllers/usersRelationship.controller')
const { verifyToken, checkRole } = require('../middlewares/auth.middleware')

// TODO: Add middleware declaration here

// add route endpoint here

router.get('/',verifyToken, checkRole(["admin","user"]), userRelController.getAllUserRel)
router.get('/:userRelId',verifyToken, checkRole(["admin","user"]), userRelController.getUserRelById)
router.post('/',verifyToken, checkRole(["admin","user"]), userRelController.createUserRel)
router.put('/:userRelId',verifyToken, checkRole(["admin","user"]), userRelController.updateUserRel)
router.delete('/:userRelId',verifyToken, checkRole(["admin","user"]), userRelController.deleteUserRel)

module.exports = router