const express = require("express");
const sequelize = require("./src/config/database");
const artisanRoutes = require("./src/routes/artisansRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

// Import des modèles et relations Sequelize
const {
  Artisan,
  Specialite,
  Categorie,
  registerRelations,
} = require("./src/models/relations");

const app = express();

// Activation des protections et du JSON parsing
app.use(cors());
app.use(helmet());
app.use(express.json());

// Vérification de la connexion à la base avant de démarrer
sequelize
  .authenticate()
  .then(() => console.log("✅ Connexion réussie à la base de données !"))
  .catch((err) => console.error("❌ Erreur de connexion Sequelize :", err));

// Définition des routes API
app.use("/api/artisans", artisanRoutes);
app.use("/api", userRoutes);

// Middleware global pour la gestion des erreurs
app.use((err, req, res, next) => {
  console.error("❌ Erreur serveur :", err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Erreur interne du serveur" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Serveur démarré sur le port ${PORT} 🚀`)
);
