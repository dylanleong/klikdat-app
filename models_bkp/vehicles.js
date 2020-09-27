/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicles', {
    barrels08: {
      type: DataTypes.REAL,
      allowNull: true
    },
    barrelsA08: {
      type: DataTypes.REAL,
      allowNull: true
    },
    charge120: {
      type: DataTypes.REAL,
      allowNull: true
    },
    charge240: {
      type: DataTypes.REAL,
      allowNull: true
    },
    city08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    city08U: {
      type: DataTypes.REAL,
      allowNull: true
    },
    cityA08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cityA08U: {
      type: DataTypes.REAL,
      allowNull: true
    },
    cityCD: {
      type: DataTypes.REAL,
      allowNull: true
    },
    cityE: {
      type: DataTypes.REAL,
      allowNull: true
    },
    cityUF: {
      type: DataTypes.REAL,
      allowNull: true
    },
    co2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    co2A: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    co2TailpipeAGpm: {
      type: DataTypes.REAL,
      allowNull: true
    },
    co2TailpipeGpm: {
      type: DataTypes.REAL,
      allowNull: true
    },
    comb08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comb08U: {
      type: DataTypes.REAL,
      allowNull: true
    },
    combA08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    combA08U: {
      type: DataTypes.REAL,
      allowNull: true
    },
    combE: {
      type: DataTypes.REAL,
      allowNull: true
    },
    combinedCD: {
      type: DataTypes.REAL,
      allowNull: true
    },
    combinedUF: {
      type: DataTypes.REAL,
      allowNull: true
    },
    cylinders: {
      type: DataTypes.STRING,
      allowNull: true
    },
    displ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    drive: {
      type: DataTypes.STRING,
      allowNull: true
    },
    engId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eng_dscr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    feScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuelCost08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuelCostA08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuelType1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ghgScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ghgScoreA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    highway08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    highway08U: {
      type: DataTypes.REAL,
      allowNull: true
    },
    highwayA08: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    highwayA08U: {
      type: DataTypes.REAL,
      allowNull: true
    },
    highwayCD: {
      type: DataTypes.REAL,
      allowNull: true
    },
    highwayE: {
      type: DataTypes.REAL,
      allowNull: true
    },
    highwayUF: {
      type: DataTypes.REAL,
      allowNull: true
    },
    hlv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hpv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lv2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lv4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    make: {
      type: DataTypes.STRING,
      allowNull: true
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mpgData: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    phevBlended: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pv2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pv4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    range: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rangeCity: {
      type: DataTypes.REAL,
      allowNull: true
    },
    rangeCityA: {
      type: DataTypes.REAL,
      allowNull: true
    },
    rangeHwy: {
      type: DataTypes.REAL,
      allowNull: true
    },
    rangeHwyA: {
      type: DataTypes.REAL,
      allowNull: true
    },
    trany: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UCity: {
      type: DataTypes.REAL,
      allowNull: true
    },
    UCityA: {
      type: DataTypes.REAL,
      allowNull: true
    },
    UHighway: {
      type: DataTypes.REAL,
      allowNull: true
    },
    UHighwayA: {
      type: DataTypes.REAL,
      allowNull: true
    },
    VClass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    youSaveSpend: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    guzzler: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trans_dscr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tCharger: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sCharger: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atvType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuelType2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rangeA: {
      type: DataTypes.STRING,
      allowNull: true
    },
    evMotor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mfrCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    c240Dscr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    charge240b: {
      type: DataTypes.REAL,
      allowNull: true
    },
    c240bDscr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdOn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modifiedOn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startStop: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phevCity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phevHwy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phevComb: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'vehicles'
  });
};
