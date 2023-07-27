const FoodItems = require("../models/FoodItems");

async function getAllFoodItems(req, res) {
  try {
    const foods = await FoodItems.findAll();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getFoodItemById(req, res) {
  try {
    const foods = await FoodItems.findByPk({
      where: {
        id: parseInt(req.params.foodId),
      },
    });
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createFoodItem(req, res) {
  try {
    const createFood = await FoodItems.create({
      ...req.body,
    });
    res.json(createFood);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateFoodItem(req, res) {
  try {
    const updateFood = await FoodItems.update(
      {
        ...req.body,
      },
      {
        where: {
          id: parseInt(req.params.foodId),
        },
      }
    );
    res.json(updateFood);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteFoodItem(req, res) {
  try {
    const deleteFood = await FoodItems.destroy({
      where: {
        id: parseInt(req.params.foodId),
      },
    });
    res.json(deleteFood);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllFoodItems,
  getFoodItemById,
  createFoodItem,
  updateFoodItem,
  deleteFoodItem,
};
