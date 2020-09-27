/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('airport_codes', {
    ident: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    elevation_ft: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iso_country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iso_region: {
      type: DataTypes.STRING,
      allowNull: true
    },
    municipality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gps_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iata_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    local_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'airport_codes'
  });
};
