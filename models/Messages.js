const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Messages = sequelize.define(
  "Messages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "sender_id",
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      field: "receiver_id",
    },
    content:{
        type:DataTypes.STRING,
        allowNull: false,
        field: "content"
    },
    circleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "circles",
        key: "id",
      },
      field: "circle_id",
    },
    chatroomId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "chatrooms",
        key: "id",
      },
      field: "chatroom_id",
    },
    isDm:{
        type: DataTypes.BOOLEAN,
        allowNull:true,
        field: "is_dm"
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
    tableName: "messages",
    timestamps: false,
  }
);

module.exports = Messages;
