const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const FoodItems = sequelize.define(
  "FoodItems",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    categoriesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "categories_id",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updated_at",
    },
  },
  {
    tableName: "food_items",
    timestamps: false,
  }
);

module.exports = FoodItems;
