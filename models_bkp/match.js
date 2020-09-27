/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(match_id_seq::regclass)',
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_DATE')
    },
    winner_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    loser_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'match'
  });
};
