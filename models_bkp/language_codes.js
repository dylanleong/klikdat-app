/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('language_codes', {
    language_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    language_desc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'language_codes'
  });
};
