const OrderItems = require("../models/OrderItems");

async function getAllOrderItems(req, res) {
  try {
    const orderItems = await OrderItems.findAll();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getOrderItemById(req, res) {
  try {
    const orderItem = await OrderItems.findByPk(
      parseInt(req.params.orderItemId)
    );
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createOrderItem(req, res) {
  try {
    const createOrderItem = await OrderItems.create({
      ...req.body,
    });
    res.json(createOrderItem);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateOrderItem(req, res) {
  try {
    const updateOrderItem = await OrderItems.update(
      {
        ...req.body,
      },
      {
        where: {
          id: parseInt(req.params.orderItemId),
        },
      }
    );
    res.json(updateOrderItem);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteOrderItem(req, res) {
  try {
    const deleteOrderItem = await OrderItems.destroy({
      where: {
        id: parseInt(req.params.orderItemId),
      },
    });
    res.json(deleteOrderItem);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
