import db from "../config/db.js";
import { DataTypes } from "sequelize";

const User = db.define('user', {
  Username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        primaryKey: true
  },

  Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
  },

  Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
  },
  Nama_lengkap: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
  Alamat: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  Role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }

}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
    
},);

export default User;
