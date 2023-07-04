const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Chatrooms = sequelize.define(
  "Chatrooms",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    chatroomTitle:{
        type: DataTypes.STRING,
        allowNull:false,
        field:'chatroom_title'
    },
    circleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "circles",
        key: "id",
      },
      field: "circle_id",
    },
    creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        field: "creator_id",
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
        fields: ["chatroom_title", "circle_id)"],
      },
    ],
    tableName: "chatrooms",
    timestamps: false,
  }
);

module.exports = Chatrooms;
