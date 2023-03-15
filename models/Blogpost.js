const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Blogpost extends Model {}

Blogpost.init(
  {
   id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   },
   user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
   post_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  post_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
  }
);

module.exports = Blogpost;
