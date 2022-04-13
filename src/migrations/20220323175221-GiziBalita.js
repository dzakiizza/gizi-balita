"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("GiziBalita", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      umur: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      height: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      bb_u: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pb_u: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imt_u: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("GiziBalita");
  },
};
