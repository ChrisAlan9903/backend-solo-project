const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const UsersRelationship = sequelize.define(
  "UsersRelationship",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "user_id",
    },
    relatedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "related_user_id",
    },
    relationshipType:{
        type:DataTypes.STRING,
        allowNull:false,
        field: "relationship_type"
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
        fields: ["user_id", "related_user_id)"],
      },
    ],
    tableName: "replies",
    timestamps: false,
  }
);

module.exports = UsersRelationship;
