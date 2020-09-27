/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coastline_geom_point', {
    y: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    x: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'coastline_geom_point'
  });
};
