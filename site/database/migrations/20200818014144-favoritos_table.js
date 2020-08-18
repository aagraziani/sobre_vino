'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('favoritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'user'
          },
          key: 'id'
        },
        allowNull: false
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'wine'
          },
          key: 'id'
        },
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('favoritos');
  }
};
