const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
// const FoodItems = require("../models/FoodItems");

const OrderItems = sequelize.define(
  "OrderItems",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "id",
      },
    },
    foodItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    timestamps: false,
  }
);

// Define the association to FoodItems
// OrderItems.belongsTo(FoodItems, { foreignKey: "foodItemId" });

module.exports = OrderItems;
