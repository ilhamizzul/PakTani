'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_item: {
        type: Sequelize.STRING(55),
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gambar_item: {
        type: Sequelize.STRING(75),
        allowNull: false
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      deskripsi_item: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      catatan_item: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      id_lapak: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'tb_lapak',
          key: 'id'
        }
      }, 
      id_kategori: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'tb_category_item',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_item');
  }
};
