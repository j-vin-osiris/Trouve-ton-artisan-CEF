const helmet = require("helmet"); // Import de Helmet
require("dotenv").config(); // Charge les variables d'environnement
const express = require("express");
const artisanRoutes = require("./src/routes/artisans");
const rateLimiter = require("./src/middlewares/rateLimiter");

const app = express();

// Middleware Helmet pour ajouter des en-têtes sécurisés
app.use(helmet());

// Middleware pour limiter les requêtes abusives
app.use(rateLimiter);

// Middleware pour traiter les JSON
app.use(express.json());

// Routes pour les artisans
app.use("/api/artisans", artisanRoutes);

// Configuration du port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
