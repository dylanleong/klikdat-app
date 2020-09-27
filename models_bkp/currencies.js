/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currencies', {
    Entity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AlphabeticCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NumericCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MinorUnit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WithdrawalDate: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'currencies'
  });
};
