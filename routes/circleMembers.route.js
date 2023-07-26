const express = require("express");
const router = express.Router();
const circleMembersController = require("../controllers/circleMembers.controller");
const { verifyToken, checkRole } = require("../middlewares/auth.middlewares");

// TODO: Add middleware declaration here

// add route endpoint here
router.get(
  "/",
  verifyToken,
  checkRole(["admin", "user"]),
  circleMembersController.getAllCircleMembers
);
router.get(
  "/:circleId/:circleMemberId",
  verifyToken,
  checkRole(["admin", "user"]),
  circleMembersController.getCircleMemberById
);
router.post(
  "/",
  verifyToken,
  checkRole(["admin", "user"]),
  circleMembersController.createCircleMembers
);
router.put(
  "/:circleMemberId",
  verifyToken,
  checkRole(["admin", "user"]),
  circleMembersController.updateCircleMembers
);
router.delete(
  "/:circleMemberId",
  verifyToken,
  checkRole(["admin", "user"]),
  circleMembersController.deleteCircleMembers
);

module.exports = router;
