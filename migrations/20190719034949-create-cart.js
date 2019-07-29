'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_cart', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_item: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'tb_item',
          key: 'id'
        }
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
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_cart');
  }
};
