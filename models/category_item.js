const Sequelize = require('sequelize');
const db = require('../config/connection');

const category = db.define('tb_category_item', {
    nama_kategori: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false
    }
}, {
    freezeTableName : true
})

module.exports = category;