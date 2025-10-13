'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('trees', [
      {
        isPublic: true,
        name: `Nicoles_tree.`,
        theme: 'dark',
        access_code: '1234access',
        admin_code: '5678admin',
        tree_id: 1234
      },
      {
        isPublic: true,
        name: `Ryan's_tree.`,
        theme: 'dark',
        access_code: '1234access',
        admin_code: '5678admin',
        tree_id: 5678
      }


    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('leaves', null, {})
  }
};
