'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: 'Title is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: 'Description is required'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: 'Status is required'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate : {
        isAfter: new Date (),
        msg: 'Please input valid date'
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};