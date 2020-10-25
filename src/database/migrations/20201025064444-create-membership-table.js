'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('memberships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      discountValue: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      discountQuota: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      discountIsPercentage: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      published: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      expiry_in: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('memberships');
  }
};