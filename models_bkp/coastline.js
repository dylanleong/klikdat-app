/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coastline', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(coastline_id_seq::regclass)',
      primaryKey: true
    },
    geom: {
      type: DataTypes.ENUM(),
      allowNull: true
    },
    featurecla: {
      type: DataTypes.STRING,
      allowNull: true
    },
    scalerank: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    min_zoom: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'coastline'
  });
};
