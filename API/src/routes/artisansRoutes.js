const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController");

// Route pour récupérer tous les artisans avec leur spécialité et catégorie
router.get("/", artisanController.getAllArtisans);

// Route pour rechercher un artisan par son nom (requête GET avec `?name=xyz`)
router.get("/search", artisanController.searchArtisanByName);

// Route pour récupérer les artisans mis en avant (`top = 1`)
router.get("/featured", artisanController.getFeaturedArtisans);

// Route pour récupérer un artisan spécifique en fonction de son nom (`/artisan/NomArtisan`)
router.get("/artisan/:name", artisanController.getArtisanByName);

// Route pour récupérer les artisans selon leur spécialité (`/specialite/NomSpecialite`)
router.get("/specialite/:name", artisanController.getArtisansBySpecialty);

// Route pour récupérer les artisans d'une catégorie spécifique via leur spécialité (`/categories/{categoryId}/artisans`)
router.get(
  "/categories/:categoryId/artisans",
  artisanController.getArtisansByCategory
);

// Route pour récupérer toutes les spécialités d'une catégorie (`/specialites/{categoryId}`)
router.get(
  "/specialites/:categoryId",
  artisanController.getSpecialtiesByCategory
);

module.exports = router;
