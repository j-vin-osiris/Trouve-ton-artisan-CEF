const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController"); // Import des fonctions du contrôleur

// Route pour récupérer tous les artisans
router.get("/", artisanController.getAllArtisans);

// Route pour rechercher un artisan par nom
router.get("/search", artisanController.searchArtisanByName);

// Route pour rechercher des artisans par catégorie
router.get("/category", artisanController.searchArtisanByCategory);

module.exports = router;
