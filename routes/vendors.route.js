const express = require("express");
const router = express.Router();
const vendorsController = require("../controllers/vendors.controller");
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
  vendorsController.getAllVendors
);

router.get(
  "/:vendorId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  vendorsController.getVendorById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  vendorsController.createVendor
);

router.put(
  "/:vendorId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  vendorsController.updateVendor
);

router.delete(
  "/:vendorId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  vendorsController.deleteVendor
);

module.exports = router;
