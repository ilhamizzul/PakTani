'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_komentar', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isi_komentar: {
        type: Sequelize.STRING(100),
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
      id_item: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'tb_item',
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
    return queryInterface.dropTable('tb_komentar');
  }
};
