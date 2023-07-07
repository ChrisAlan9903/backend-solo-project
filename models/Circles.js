const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Circles = sequelize.define(
  "Circles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    circleTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "circle_title",
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "creator_id",
      onDelete : "CASCADE"
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: "is_active",
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
    tableName: "circles",
    timestamps: false,
  }
);

module.exports = Circles;
