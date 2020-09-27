/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('world_cities', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subcountry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geonameid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'world_cities'
  });
};
