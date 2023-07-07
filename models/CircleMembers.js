const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const CircleMembers = sequelize.define(
  "CircleMembers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "member_id",
      onDelete : "CASCADE",

    },
    circleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "circles",
        key: "id",
      },
      field: "circle_id",
      onDelete : "CASCADE",

    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:false,
        field: "is_admin"
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
    indexes: [
      {
        unique: true,
        fields: ["member_id", "circle_id)"],
      },
    ],
    tableName: "circle_members",
    timestamps: false,
  }
);

module.exports = CircleMembers;
