'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: DataTypes.STRING,
    allowNull: false,
    unique:true
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
//name of the models is generally in singular form but the name of the tables is in plural form
//city.js is allowed to throw error at javascript level where the file in models will error in databases level