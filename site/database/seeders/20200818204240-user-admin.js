'use strict';
const bcryptjs = require('bcrypt');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('user', [
      {
        nombre: 'administrador',
        email: 'eladmin@administrador.com',
        password: bcryptjs.hashSync('Adm1n1str@d0r', 10),
        foto: '',
        admin: true,

      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
