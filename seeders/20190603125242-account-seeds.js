'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_account', [{
      username: 'John Doe',
      password: 'john123',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'ilhamizzul',
      password: 'uyeuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'chamadani',
      password: 'chamadani123',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'nadira',
      password: 'nadira123',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_account', null, {});
  }
};
