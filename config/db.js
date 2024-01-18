import Sequelize from "sequelize";

const db = new Sequelize('perpustakaan2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
