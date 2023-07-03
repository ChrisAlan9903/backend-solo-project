const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.config')

const Users = sequelize.define(
    "Users", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "id"
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            field:"username"
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            field:"email"
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            field:"password"
        },
        dmAccess:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field:"dm_access"
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull:true,
            field: "created_at"
        },
        updatedAt:{
            type:DataTypes.DATE,
            allowNull:true,
            field: "updated_at"
        },


    },
    {
        tableName:"users",
        timestamps: false,
        defaultScope:{
            attributes:{
                exclude:["password"]
            }
        }
    }

)

module.exports = Users