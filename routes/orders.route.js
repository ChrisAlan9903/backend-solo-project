const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders.controller");
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
  ordersController.getAllOrders
);

router.get(
  "/:orderId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  ordersController.getOrderById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  ordersController.createOrder
);

router.put(
  "/:orderId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  ordersController.updateOrder
);

router.delete(
  "/:orderId",
  verifyToken,
  checkRole(["admin", "user", "vendor"]),
  ordersController.deleteOrder
);

module.exports = router;
