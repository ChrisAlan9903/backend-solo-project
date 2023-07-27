const Categories = require("../models/Categories");

async function getAllCategories(req, res) {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getCategoryById(req, res) {
  try {
    const categories = await Categories.findByPk({
      where: {
        id: parseInt(req.params.categoryId),
      },
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createCategory(req, res) {
  try {
    const createCategory = await Categories.create({
      ...req.body,
    });
    res.json(createCategory);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateCategory(req, res) {
  try {
    const updateCategory = await Categories.update(
      {
        ...req.body,
      },
      {
        where: {
          id: parseInt(req.params.categoryId),
        },
      }
    );
    res.json(updateCategory);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteCategory(req, res) {
  try {
    const deleteCategory = await Categories.destroy({
      where: {
        id: parseInt(req.params.categoryId),
      },
    });
    res.json(deleteCategory);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
