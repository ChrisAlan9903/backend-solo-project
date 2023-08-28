const Orders = require("../models/Orders");

async function getAllOrders(req, res) {
  try {
    if (req.user.role === "admin") {
      const orders = await Orders.findAll();
      res.json(orders);
    } else if (req.user.role) {
      const orders = await Orders.findAll({
        where: {},
      });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function getOrderById(req, res) {
  try {
    const order = await Orders.findByPk(parseInt(req.params.orderId));
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function createOrder(req, res) {
  try {
    const createOrder = await Orders.create({
      ...req.body,
    });
    res.json(createOrder);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function updateOrder(req, res) {
  try {
    const updateOrder = await Orders.update(
      {
        ...req.body,
      },
      {
        where: {
          id: parseInt(req.params.orderId),
        },
      }
    );
    res.json(updateOrder);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

async function deleteOrder(req, res) {
  try {
    const deleteOrder = await Orders.destroy({
      where: {
        id: parseInt(req.params.orderId),
      },
    });
    res.json(deleteOrder);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
