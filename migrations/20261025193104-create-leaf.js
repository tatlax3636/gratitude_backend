'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('leaves', {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      x_location: {
        type: Sequelize.INTEGER
      },
      y_location: {
        type: Sequelize.INTEGER
      },
      tree_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'trees', // name of Target model
          key: 'tree_id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('leaves');
  }
};