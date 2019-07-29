'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tb_category_item', [{
        nama_kategori: 'Pupuk',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama_kategori: 'Pestisida',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama_kategori: 'Benih',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama_kategori: 'Peralatan Tani',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tb_category_item', null, {});
  }
};
