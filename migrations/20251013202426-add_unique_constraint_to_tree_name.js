'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('trees', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_tree_name' // Optional: Provide a custom name for the constraint
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('trees', 'unique_tree_name'); // Use the same name as in 'up'
  }
};
