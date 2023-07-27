const express = require("express");
const router = express.Router();
const orderItemsController = require("../controllers/orderItems.controller");
const {
  verifyToken,
  checkRole,
} = require("../middlewares/auth.middlewares.js");

// TODO: Add middleware declaration here

// add route endpoint here

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  orderItemsController.getAllOrderItems
);

router.get(
  "/:orderItemId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  orderItemsController.getOrderItemById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  orderItemsController.createOrderItem
);

router.put(
  "/:orderItemId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  orderItemsController.updateOrderItem
);

router.delete(
  "/:orderItemId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  orderItemsController.deleteOrderItem
);

module.exports = router;
