'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_pembeli', [{
      nama_pembeli : 'john doe lenon',
      alamat: 'malang',
      email: 'johnDoe@gmail.com',
      no_telepon : '085217443726',
      nik: '3282479817',
      id_account: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama_pembeli : 'Ilham Izzul Hadyan',
      alamat: 'probolinggo',
      email: 'ilhamizzul@gmail.com',
      no_telepon : '085417483726',
      nik: '3289489817',
      id_account: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_pembeli', null, {});
  }
};
