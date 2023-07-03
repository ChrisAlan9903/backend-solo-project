const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const ChatroomMembers = sequelize.define(
  "ChatroomMembers",
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
    },
    chatroomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "chatrooms",
        key: "id",
      },
      field: "chatroom_id",
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
        fields: ["member_id", "chatroom_id)"],
      },
    ],
    tableName: "chatroom_members",
    timestamps: false,
  }
);

module.exports = ChatroomMembers;
