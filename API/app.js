const express = require("express");
const sequelize = require("./src/config/database");
const artisanRoutes = require("./src/routes/artisansRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const {
  Artisan,
  Specialite,
  Categorie,
  registerRelations,
} = require("./src/models/relations");

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// // 📌 Vérifier la connexion à la base avant de démarrer
sequelize
  .authenticate()
  .then(async () => {
    console.log("✅ Connexion réussie à la base de données !");
  })
  .catch((err) => console.error("❌ Erreur de connexion Sequelize :", err));

app.use("/api/artisans", artisanRoutes);
app.use("/api", userRoutes);

app.use((req, res, next) => {
  console.log(`🔍 Requête reçue : ${req.method} ${req.url}`);
  next();
});

// 📍 Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error("Erreur serveur :", err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Erreur interne du serveur" });
});

// 📌 Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT} 🚀`);
});
