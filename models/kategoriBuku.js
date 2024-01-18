import db from "../config/db.js";
import { DataTypes } from "sequelize";

const falsed = {
  createdAt: false,
  updatedAt: false
}

const KatBuku = db.define('kategoribuku', {
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
