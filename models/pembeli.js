const Sequelize = require("sequelize");
const db = require("../config/connection");
const account = require("./account");

const pembeli = db.define(
  "tb_pembeli",
  {
    nama_pembeli: {
      type: Sequelize.STRING(35),
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
      type: Sequelize.INTEGER
    }
  },
  {
    freezeTableName: true
  }
);
pembeli.associate = models => {
  pembeli.belongsTo(models.account);
};

// pembeli.belongsTo(account, {foreignKey : id_account});

module.exports = pembeli;
