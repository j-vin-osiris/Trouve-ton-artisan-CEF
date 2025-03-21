const express = require("express");
const router = express.Router();
const { Op } = require("sequelize"); // Pour les opérateurs Sequelize
const Artisan = require("../models/Artisans"); // Charge le modèle Artisan

// Route pour récupérer tous les artisans
router.get("/", async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans); // Retourne tous les artisans
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour rechercher un artisan par nom
router.get("/search", async (req, res) => {
  const { name } = req.query; // Récupère le paramètre `name`
  try {
    const artisans = await Artisan.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`, // Recherche partielle sur le nom
        },
      },
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour rechercher des artisans par catégorie
router.get("/category", async (req, res) => {
  const { category } = req.query; // Récupère le paramètre `category`
  try {
    const artisans = await Artisan.findAll({
      where: {
        category: {
          [Op.like]: `%${category}%`, // Recherche partielle sur la catégorie
        },
      },
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
