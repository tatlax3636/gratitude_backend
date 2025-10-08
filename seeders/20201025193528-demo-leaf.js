'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('leaves', [
    {
      author: 'ryan',
      content: `Nicole's face.`,
      x_location: 46,
      y_location: 32,
      id: 1,
      tree_id: 1234
    },
    {
      author: 'ryan',
      content: `Coffee.`,
      x_location: 34,
      y_location: 53,
      id: 2,
      tree_id: 1234
    },
    {
      author: 'ryan',
      content: `Testing my face.`,
      x_location: 37,
      y_location: 57,
      id: 3,
      tree_id: 5678
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('leaves', null, {})
  }
};
