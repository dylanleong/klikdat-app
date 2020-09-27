/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('open_postcode', {
    postcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    usertype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    easting: {
      type: DataTypes.STRING,
      allowNull: true
    },
    northing: {
      type: DataTypes.STRING,
      allowNull: true
    },
    positional_quality_indicator: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode_no_space: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode_fixed_width_seven: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode_fixed_width_eight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode_area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode_district: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode_sector: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incode: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'open_postcode'
  });
};
