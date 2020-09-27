/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Place', {    
    place_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'place',
    timestamps: false
  });
};
