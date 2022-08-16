const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates Password model
class Password extends Model {}

Password.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },    
    },
    {
    sequelize,
        hooks: {},
        underscored: true,
        tableName: "User Data",
        timestamps: false,
        modelName: 'password' 
    }
);

module.exports = Password;