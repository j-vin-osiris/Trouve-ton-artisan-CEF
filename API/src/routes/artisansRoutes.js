const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController");

// 📍 Récupérer tous les artisans avec spécialité et catégorie
router.get("/", artisanController.getAllArtisans);

// 🔍 Rechercher un artisan par nom
router.get("/search", artisanController.searchArtisanByName);

// 📍 Récupérer les artisans mis en avant (top = 1)
router.get("/featured", artisanController.getFeaturedArtisans);

router.get("/artisan/:name", artisanController.getArtisanByName);

router.get("/specialite/:name", artisanController.getArtisansBySpecialty);

// 📍 Récupérer les artisans d'une catégorie spécifique via spécialités
router.get(
  "/categories/:categoryId/artisans",
  artisanController.getArtisansByCategory
);

// 📍 Récupérer les spécialités d'une catégorie spécifique
router.get(
  "/specialites/:categoryId",
  artisanController.getSpecialtiesByCategory
);

module.exports = router;
