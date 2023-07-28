const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Vendors = sequelize.define(
  "Vendors",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vendorName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    vendorInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contactInfo: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    tableName: "vendors",
    timestamps: false,
  }
);

module.exports = Vendors;
