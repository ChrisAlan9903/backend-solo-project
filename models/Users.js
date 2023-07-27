const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "username",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "email",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password",
    },
    role: {
      type: DataTypes.ENUM(["admin", "customer", "vendor"]),
      allowNull: true,
      defaultValue: "customer",
      field: "role",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "address",
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: "is_verified",
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
    tableName: "users",
    timestamps: false,
    defaultScope: {
      attributes: {
        exclude: ["password"],
      },
    },
  }
);

module.exports = Users;
