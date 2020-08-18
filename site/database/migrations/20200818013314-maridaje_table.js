'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('maridaje', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }) 
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('maridaje');
  }
};
