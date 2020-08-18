'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cepa', [
      { nombre: 'Malbec' },
      { nombre: 'Blend' },
      { nombre: 'Cabernet Sauvignon' },
      { nombre: 'Syrah' },
      { nombre: 'Merlot' },
      { nombre: 'Bonarda' },
      { nombre: 'Pinot Noir' },
      { nombre: 'Chardonay' },
      { nombre: 'Torrontes' },
      { nombre: 'Sauvignon Blanc' },
      { nombre: 'Viognier' },
      { nombre: 'Semillón' },
      { nombre: 'Moscatel' },
      { nombre: 'Malbec Rose' },
      { nombre: 'Rosado' },
      { nombre: 'Rose' },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cepa', null, {});
  }
};
