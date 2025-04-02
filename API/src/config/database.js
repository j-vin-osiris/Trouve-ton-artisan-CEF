require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nom de la base de données
  process.env.DB_USER, // Utilisateur MySQL
  process.env.DB_PASS, // Mot de passe MySQL
  {
    host: process.env.DB_HOST,
    dialect: "mysql", // Type de base de données
    logging: false, // Désactive les logs SQL
    port: process.env.DB_PORT, // Port MySQL, généralement 3306
  }
);

module.exports = sequelize;
