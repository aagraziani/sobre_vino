'use strict';

const anios = [];

for (let i = 1960; i < 2040; i++) {
  let anio = i;
  anios.push({nombre: anio});
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('anio', anios, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('anio', null, {});
  }
};
