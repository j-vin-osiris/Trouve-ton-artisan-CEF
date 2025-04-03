const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController"); // Import du contrôleur

// 📍 Route : Récupérer tous les artisans avec spécialité et catégorie
router.get("/", artisanController.getAllArtisans);

// 🔍 Route : Rechercher un artisan par nom (recherche partielle)
router.get("/search", artisanController.searchArtisanByName);

// 📍 Route : Récupérer un artisan spécifique par nom
router.get("/artisan/:name", artisanController.getArtisanByName);

// 📍 Route : Récupérer les artisans d’une catégorie spécifique (avec ID)
router.get("/category/:categoryId", artisanController.getArtisansByCategory);

// 📍 Route : Récupérer les artisans mis en avant (`top = 1`)
router.get("/featured", artisanController.getFeaturedArtisans);

module.exports = router;
