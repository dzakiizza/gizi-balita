"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IndeksUmur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IndeksUmur.init(
    {
      umur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      indeks: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      min3sd: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      min2sd: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      min1sd: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      median: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      pls1sd: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      pls2sd: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      pls3sd: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "IndeksUmur",
      timestamps: false,
    }
  );
  return IndeksUmur;
};
