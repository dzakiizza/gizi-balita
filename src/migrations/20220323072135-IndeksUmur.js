'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IndeksUmurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      umur: {
        type: Sequelize.INTEGER,
        allowNull:false, 
      },
      indeks: {
        type: Sequelize.STRING,
        allowNull:false, 
      },
      gender: {
        type: Sequelize.STRING,
        allowNull:false, 
      },
      min3sd: {
        type: Sequelize.DOUBLE,
        allowNull:false, 
      },
      min2sd: {
        type: Sequelize.DOUBLE,
        allowNull:false, 
      },
      min1sd: {
        type: Sequelize.DOUBLE,
        allowNull:false, 
      },
      median: {
        type: Sequelize.DOUBLE,
        allowNull:false, 
      },
      pls1sd: {
        type: Sequelize.DOUBLE,
        allowNull:false, 
      },
      pls2sd: {
        type: Sequelize.DOUBLE,
        allowNull:false, 
      },
      pls3sd: {
        type: Sequelize.DOUBLE,
        allowNull:false, 
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IndeksUmurs');
  }
};