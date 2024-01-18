import db from "../config/db.js";
import { DataTypes } from "sequelize";

import User from "./user.js";
import Buku from "./buku.js";

const Peminjaman = db.define("peminjaman", {
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

  TanggalPeminjaman: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }

  },

  TanggalPengembalian: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }, 

  StatusPinjaman: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

 
export default Peminjaman ;


