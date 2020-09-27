/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(cities_id_seq::regclass)',
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sub_country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geo_name_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'cities'
  });
};
