import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Buku = db.define('buku', {
  BukuID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },

  Judul: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    primaryKey: true
  },

  Penulis: {
  type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  Penerbit: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  TahunTerbit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, 
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  });

export default Buku;
