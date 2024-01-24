import { DataTypes } from "sequelize";
import db from "../config/db.js";

const UlasanBuku = db.define('ulasanbuku', {
  UlasanID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },

  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    primaryKey: true
  },

  BukuID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  Ulasan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  Rating: {
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

export default UlasanBuku;
