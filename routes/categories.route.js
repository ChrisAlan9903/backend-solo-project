const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller");
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
  categoriesController.getAllCategories
);

router.get(
  "/:categoryId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  categoriesController.getCategoryById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  categoriesController.createCategory
);

router.put(
  "/:categoryId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  categoriesController.updateCategory
);

router.delete(
  "/:categoryId",
  verifyToken,
  checkRole(["admin", "customer", "vendor"]),
  categoriesController.deleteCategory
);

module.exports = router;
