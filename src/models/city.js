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
      this.hasMany(models.Airport,{
        foreignKey:'cityId'
      })
    }
  }
  City.init({
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, 
  {
    sequelize,
    modelName: 'City',
  });
  return City;
};
// the model is a blueprint of the database structure, and a migration is a set of changes that when applied modifies the database's structure to match the current state of the models.
//A migration, on the other hand, is the mechanism by which you propagate changes made to models (like adding a field, deleting a model, etc.) into the database schema.