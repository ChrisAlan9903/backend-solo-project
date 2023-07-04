// Implement register route ✅
// Implement login route ✅
// Implement verifyEmail route



const express = require("express")
const router = express.Router()
const authController = require('../controllers/auth.controller')

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router