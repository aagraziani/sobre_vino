'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('maridaje', [
      { nombre: 'Encurtidos y frutos secos' },
      { nombre: 'Quesos' },
      { nombre: 'Ensaladas' },
      { nombre: 'Paellas y arroces' },
      { nombre: 'Mariscos' },
      { nombre: 'Carnes rojas' },
      { nombre: 'Carnes blancas' },
      { nombre: 'Carnes frías' },
      { nombre: 'Pescados' },
      { nombre: 'Legumbres' },
      { nombre: 'Postres dulces' },
      { nombre: 'Chocolates y postres de cacao o café' },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('maridaje', null, {});
  }
};
