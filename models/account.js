const Sequelize = require("sequelize");
const db = require("../config/connection");
const pembeli = require("./pembeli");

const account = db.define(
  "tb_account",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING(35),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

// account.hasOne(pembeli, {foreignKey : 'id_account'});

account.associate = models => {
  account.belongsTo(models.pembeli, {as : 'pembeli'});
};

module.exports = account;
