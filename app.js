const sequelize = require("./src/config/database");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion réussie à la base de données.");
  })
  .catch((err) => {
    console.error("Erreur de connexion :", err);
  });
