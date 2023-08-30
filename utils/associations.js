const FoodItems = require("../models/FoodItems");
const OrderItems = require("../models/OrderItems");

// Define associations here
FoodItems.hasMany(OrderItems, { foreignKey: "foodItemId" });
OrderItems.belongsTo(FoodItems, { foreignKey: "foodItemId" });
