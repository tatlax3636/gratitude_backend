'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('leaves', [
    {
      author: 'Ryan',
      content: `Nicole's face.`,
      x_location: 46,
      y_location: 32,
      id: 1
    },
    {
      author: 'Ryan',
      content: `Coffee.`,
      x_location: 34,
      y_location: 53,
      id: 2
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('leaves', null, {})
  }
};
