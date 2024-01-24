import db from "../config/db.js";
import { DataTypes } from "sequelize";

const KoleksiPribadi = db.define('koleksipribadi', {
  KoleksiID: {
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
  }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

export default KoleksiPribadi;
