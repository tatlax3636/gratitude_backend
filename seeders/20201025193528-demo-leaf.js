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
        tree_id: 1234,
        createdAt: '2025-12-25T10:00:00.001Z',
        updatedAt: '2025-12-25T10:00:00.001Z'
      },
      {
        author: 'ryan',
        content: `Coffee.`,
        x_location: 34,
        y_location: 53,
        id: 2,
        tree_id: 1234,
        createdAt: '2025-12-25T10:00:00.000Z',
        updatedAt: '2025-12-25T10:00:00.000Z'
      },
      {
        author: 'ryan',
        content: `Testing my face.`,
        x_location: 37,
        y_location: 57,
        id: 3,
        tree_id: 5678,
        createdAt: '2025-12-25T10:00:00.002Z',
        updatedAt: '2025-12-25T10:00:00.002Z'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('leaves', null, {})
  }
};
