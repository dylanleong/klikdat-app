/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    official_name_ar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    official_name_cn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    official_name_en: {
      type: DataTypes.STRING,
      allowNull: true
    },
    official_name_es: {
      type: DataTypes.STRING,
      allowNull: true
    },
    official_name_fr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    official_name_ru: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO3166_1_Alpha_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO3166_1_Alpha_3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO3166_1_numeric: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO4217_currency_alphabetic_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO4217_currency_country_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO4217_currency_minor_unit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO4217_currency_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ISO4217_currency_numeric_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    M49: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Arabic_Formal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Arabic_Short: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Chinese_Formal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Chinese_Short: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_English_Formal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_English_Short: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_French_Formal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_French_Short: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Russian_Formal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Russian_Short: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Spanish_Formal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UNTERM_Spanish_Short: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CLDR_display_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Continent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Developed___Developing_Countries: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Dial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EDGAR: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FIFA: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FIPS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GAUL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Geoname_ID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Global_Code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Global_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IOC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ITU: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Intermediate_Region_Code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Intermediate_Region_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Land_Locked_Developing_Countries__LLDC_: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Languages: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Least_Developed_Countries__LDC_: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MARC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Region_Code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Region_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Small_Island_Developing_States__SIDS_: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sub_region_Code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sub_region_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TLD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WMO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_independent: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'countries'
  });
};
