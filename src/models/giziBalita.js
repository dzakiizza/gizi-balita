"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GiziBalita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GiziBalita.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      umur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      height: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      bb_u: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pb_u: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imt_u: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "GiziBalita",
      timestamps: false,
    }
  );
  return GiziBalita;
};
