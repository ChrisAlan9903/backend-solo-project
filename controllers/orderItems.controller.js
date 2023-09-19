const OrderItems = require("../models/OrderItems");
const FoodItems = require("../models/FoodItems");
require("../utils/associations");

async function getAllOrderItems(req, res) {
  const queryOrderId = parseInt(req.query.orderId);
  console.log(`OrderItem check: req.query.orderItem:`, queryOrderId);
  try {
    if (req.user.role === "admin") {
      const orderItems = await OrderItems.findAll();
      res.json(orderItems);
    } else if (req.user.role === "vendor") {
      const orderItemIds = req.query.foodItemIds.split(",").map((id) => {
        return parseInt(id, 10);
      });

      console.log(`req.query.foodItemIds:`, req.query.foodItemIds);
      console.log(`orderItemIds:`, orderItemIds);

      const orderItems = await OrderItems.findAll({
        where: {
          foodItemId: orderItemIds, //TODO: change this
        },
        // where: {
        //   orderId: parseInt(req.query.orderId),
        // },
        // attributes: ["id", "foodItemId"],
      });
      // const foods = await FoodItems.findAll({
      //   where: {
      //     foodItemId: orderItemIds,
      //   },
      // });

      //getting all the ids of of orderItems based on the orderId
      // const logData = orderItems.map(async (item) => {
      //   const foodName = await FoodItems.findOne({
      //     where: {
      //       id: item.foodItemId,
      //     },
      //     attributes: ["name"],
      //   });
      //   const { name } = foodName;
      //   console.log(`foodName:`, name);
      //   return { id: item.id, foodItemId: item.foodItemId, foodName: name };
      // });

      // console.log(`orderItems output: `, logData);
      res.json(orderItems);
    }
  } catch (error) {
    console.log(`error:`, error);
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
