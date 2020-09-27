/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geoip_v4', {
    network: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geoname_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    continent_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    continent_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country_iso_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_anonymous_proxy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_satellite_provider: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'geoip_v4'
  });
};
