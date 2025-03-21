const express = require("express");
const artisanRoutes = require("./src/routes/artisans"); // Importe les routes des artisans

const app = express();

// Middleware pour gérer les requêtes avec du JSON
app.use(express.json());

// Déclare les routes pour les artisans
app.use("/api/artisans", artisanRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
