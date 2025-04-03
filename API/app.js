const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const express = require("express");
const artisanRoutes = require("./src/routes/artisans");
const rateLimiter = require("./src/middlewares/rateLimiter");
const sequelize = require("./src/config/database"); // ✅ Import de la connexion à la base de données

const app = express();
app.use(cors()); // Active le CORS pour toutes les routes
app.use(helmet()); // Sécurise les en-têtes HTTP
app.use(rateLimiter); // Limite les requêtes abusives
app.use(express.json()); // Middleware pour traiter les JSON

// 📌 Vérifier la connexion à la base de données avant de démarrer
sequelize
  .authenticate()
  .then(() => console.log("✅ Connexion à la base de données réussie ! 🚀"))
  .catch((err) => console.error("❌ Erreur de connexion à la base :", err));

// Routes API
app.use("/api/artisans", artisanRoutes);

// 📍 Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error("Erreur serveur :", err);
  res.status(500).json({ message: "Erreur interne du serveur" });
});

// Configuration du port et démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT} 🚀`);
});
