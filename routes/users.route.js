const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");
const {
  verifyToken,
  checkRole,
} = require("../middlewares/auth.middlewares.js");

// TODO: Add middleware declaration here

// add route endpoint here

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  usersController.getAllUsers
);

router.get(
  "/:userId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  usersController.getUserById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  usersController.createUser
);

router.put(
  "/:userId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  usersController.updateUser
);

router.delete(
  "/:userId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  usersController.deleteUser
);

module.exports = router;
