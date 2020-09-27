/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('people_1', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(people_1_id_seq::regclass)'
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile_no: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'people_1'
  });
};
