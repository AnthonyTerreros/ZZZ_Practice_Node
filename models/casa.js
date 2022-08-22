'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class casa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  casa.init({
    cuidad: DataTypes.STRING,
    pisos: DataTypes.INTEGER,
    fechadeventa: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'casas',
  });
  return casa;
};