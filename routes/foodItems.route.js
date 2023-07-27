const express = require("express");
const router = express.Router();
const foodItemsController = require("../controllers/foodItems.controller");
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
  foodItemsController.getAllFoodItems
);

router.get(
  "/:foodId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  foodItemsController.getFoodItemById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  foodItemsController.createFoodItem
);

router.put(
  "/:foodId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  foodItemsController.updateFoodItem
);

router.delete(
  "/:foodId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  foodItemsController.deleteFoodItem
);

module.exports = router;
