import db from "../config/db.js";
import { DataTypes } from "sequelize";

const KatBuku = db.define('kategoribuku', {
  KategoriID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },

  NamaKategori: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    primaryKey: true
  },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

export default KatBuku;
