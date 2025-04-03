const Artisan = require("../models/Artisans"); // Modèle des artisans
const Specialite = require("../models/Specialite"); // Modèle des spécialités
const Categorie = require("../models/Categorie"); // Modèle des catégories
const { Op } = require("sequelize");

// 📍 Récupérer tous les artisans avec spécialité et catégorie
const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [{ model: Specialite, include: [Categorie] }],
    });

    res.json(artisans);
  } catch (err) {
    console.error("Erreur lors de la récupération des artisans :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 🔍 Rechercher un artisan par nom (recherche partielle)
const searchArtisanByName = async (req, res) => {
  const { name } = req.query;
  try {
    const artisans = await Artisan.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      limit: 10,
    });

    res.status(200).json(artisans);
  } catch (err) {
    console.error("Erreur lors de la recherche d'un artisan :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 📍 Récupérer un artisan spécifique par nom
const getArtisanByName = async (req, res) => {
  const { name } = req.params;
  try {
    const artisan = await Artisan.findOne({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé." });
    }

    res.status(200).json(artisan);
  } catch (err) {
    console.error("Erreur backend :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// 📍 Récupérer les artisans d’une catégorie spécifique
const getArtisansByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          include: [{ model: Categorie, where: { id: categoryId } }],
        },
      ],
    });

    if (artisans.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun artisan trouvé pour cette catégorie." });
    }

    res.status(200).json(artisans);
  } catch (err) {
    console.error("Erreur serveur lors de la récupération des artisans :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// 📍 Récupérer les artisans mis en avant (top = 1)
const getFeaturedArtisans = async (req, res) => {
  try {
    const featuredArtisans = await Artisan.findAll({
      where: { top: true }, // Sélectionne les artisans avec top = 1
      include: [{ model: Specialite, include: [Categorie] }],
      order: [["rating", "DESC"]],
      limit: 3, // Sélectionne les 3 artisans les mieux notés
    });

    if (!featuredArtisans.length) {
      return res
        .status(404)
        .json({ message: "Aucun artisan en avant pour le moment." });
    }

    res.status(200).json(featuredArtisans);
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des artisans mis en avant :",
      err
    );
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// 🏗 Export des fonctions pour être utilisées dans les routes API
module.exports = {
  getAllArtisans,
  searchArtisanByName,
  getArtisanByName,
  getArtisansByCategory,
  getFeaturedArtisans,
};
