
import db from "../config/db.js";
import { DataTypes } from "sequelize";

const KatBukuRelasi = db.define('kategoribuku_relasi', {
  KategoriBukuID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },

  BukuID: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    primaryKey: true
  },

  KategoriID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

export default KatBukuRelasi;
