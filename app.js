const sequelize = require("./src/config/database"); // Charge la connexion à la base
const Artisan = require("./src/models/Artisans"); // Charge le modèle Artisan

sequelize
  .sync({ alter: true }) // Synchronise les modèles avec la table
  .then(() => {
    console.log("Les modèles sont synchronisés avec la base de données.");
  })
  .catch((err) => {
    console.error("Erreur lors de la synchronisation :", err);
  });
