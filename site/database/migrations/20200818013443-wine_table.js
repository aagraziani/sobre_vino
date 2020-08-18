'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('wine', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      bodega: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING
      },
      anio_id: {
        type: Sequelize.INTEGER
      },
      cepa_id: {
        type: Sequelize.INTEGER
      },
      maridaje_id: {
        type: Sequelize.INTEGER
      },
      foto: {
        type: Sequelize.STRING(500)
      }

     
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('wine');
  }
};
