const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// here we need to import encryption technology

// create our User model
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //
        len: [12],
      },
    },
  },
  {
    // hooks: {
    //     // encryption goes here
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
