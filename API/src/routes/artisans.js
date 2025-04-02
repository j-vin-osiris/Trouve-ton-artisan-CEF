const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController"); // Import des fonctions du contrôleur

// Route pour récupérer tous les artisans
router.get("/", artisanController.getAllArtisans);

// Route pour rechercher un artisan par nom
router.get("/search", artisanController.searchArtisanByName);

// Route pour récuperer un artisan par nom
router.get("/artisan/:name", artisanController.getArtisanByName);

// Route pour rechercher des artisans par catégorie
router.get("/category/:category", artisanController.getArtisansByCategory);

// Route pour récupérer les artisans du mois
router.get("/featured", artisanController.getFeaturedArtisans);

module.exports = router;
