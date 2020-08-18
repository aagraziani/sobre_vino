'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('anio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }) 
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('anio');
  }
};
