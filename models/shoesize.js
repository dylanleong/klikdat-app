'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoeSize = sequelize.define('ShoeSize', {
    shoe_category: DataTypes.STRING,
    shoesize_uk: DataTypes.FLOAT,
    shoesize_jp: DataTypes.FLOAT,
    shoesize_us: DataTypes.FLOAT,
    shoesize_au: DataTypes.FLOAT,
    shoesize_eu: DataTypes.FLOAT,
    shoesize_cm: DataTypes.FLOAT,
    shoesize_in: DataTypes.FLOAT
  }, {});
  ShoeSize.associate = function(models) {
    // associations can be defined here
  };
  return ShoeSize;
};