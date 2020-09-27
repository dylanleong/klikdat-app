/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(products_id_seq::regclass)',
      primaryKey: true
    },
    prod_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prod_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prod_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'products'
  });
};
