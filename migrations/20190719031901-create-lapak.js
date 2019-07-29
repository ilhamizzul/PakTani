'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_lapak', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_lapak: {
        type: Sequelize.STRING(35),
        allowNull: false
      },
      perusahaan_lapak: {
        type: Sequelize.STRING(35),
        allowNull: false
      },
      deskripsi_perusahaan: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      gambar_perusahaan: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING(150)
      },
      email: {
        type: Sequelize.STRING(35),
        unique: true,
        allowNull: false
      },
      no_telepon: {
        type: Sequelize.STRING(13),
        unique: true,
        allowNull: false
      },
      nik: {
        type: Sequelize.INTEGER(16),
        unique: true,
        allowNull: false
      },
      id_account: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'tb_account',
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
    return queryInterface.dropTable('tb_lapak');
  }
};
