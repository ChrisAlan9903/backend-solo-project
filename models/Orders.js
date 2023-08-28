const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Orders = sequelize.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "userId",
    },
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "vendorId",
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: "totalAmount",
    },
    orderStatus: {
      type: DataTypes.ENUM("pending", "completed", "cancelled"),
      allowNull: false,
      field: "orderStatus",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updatedAt",
    },
  },
  {
    tableName: "orders",
    timestamps: false,
  }
);

module.exports = Orders;
