const { Artisan, Specialite, Categorie } = require("../models/relations");
const { Op } = require("sequelize");

// 📍 Récupérer tous les artisans avec leur spécialité et catégorie
const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          include: [{ model: Categorie }],
        },
      ],
    });

    res.json(artisans);
  } catch (err) {
    console.error("❌ Erreur récupération artisans :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 🔍 Rechercher un artisan par nom
const searchArtisanByName = async (req, res) => {
  const { name } = req.query;
  try {
    const artisans = await Artisan.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
      limit: 10,
    });

    res.status(200).json(artisans);
  } catch (err) {
    console.error("❌ Erreur recherche artisan :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 📍 Récupérer un artisan spécifique par nom
const getArtisanByName = async (req, res) => {
  const { name } = req.params;

  try {
    // 🔍 Vérification de la spécialité en fonction du nom
    const artisan = await Artisan.findOne({
      where: { name },
      include: [{ model: Specialite, include: [{ model: Categorie }] }],
    });

    if (!artisan) {
      return res.status(404).json({ message: "Aucun artisan trouvé." });
    }

    res.status(200).json(artisan);
  } catch (err) {
    console.error("❌ Erreur récupération artisan :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// 📍 Récupérer les artisans d'une spécialité spécifique
const getArtisansBySpecialty = async (req, res) => {
  const { name } = req.params;
  try {
    // 🔍 Rechercher la spécialité par nom (sans distinction de casse)
    const specialite = await Specialite.findOne({ where: { name } });

    if (!specialite) {
      return res.status(404).json({ message: "Spécialité non trouvée." });
    }

    // 🔥 Récupérer les artisans de cette spécialité
    const artisans = await Artisan.findAll({
      where: { specialite_id: specialite.id },
      include: [{ model: Specialite, include: [{ model: Categorie }] }],
    });

    res.status(200).json(artisans);
  } catch (err) {
    console.error("❌ Erreur récupération artisans spécialité :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// 📍 Récupérer les artisans d'une catégorie spécifique
const getArtisansByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          where: { category_id: categoryId },
          include: [{ model: Categorie }],
        },
      ],
    });

    if (!artisans.length) {
      return res
        .status(404)
        .json({ message: "Aucun artisan trouvé pour cette catégorie." });
    }

    res.status(200).json(artisans);
  } catch (err) {
    console.error("❌ Erreur récupération artisans catégorie :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// 📍 Récupérer les spécialités d'une catégorie spécifique
const getSpecialtiesByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const specialties = await Specialite.findAll({
      where: { category_id: categoryId },
    });

    if (!specialties.length) {
      return res
        .status(404)
        .json({ message: "Aucune spécialité trouvée pour cette catégorie." });
    }

    res.status(200).json(specialties);
  } catch (error) {
    console.error("❌ Erreur récupération spécialités :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// 📍 Récupérer les artisans mis en avant (top = 1)
const getFeaturedArtisans = async (req, res) => {
  try {
    console.log("🔍 Exécution de getFeaturedArtisans...");

    const featuredArtisans = await Artisan.findAll({
      where: { top: { [Op.eq]: 1 } },
      include: [{ model: Specialite, attributes: ["name"] }],
      order: [["rating", "DESC"]],
      limit: 3,
    });

    if (!featuredArtisans.length) {
      console.warn("⚠️ Aucun artisan mis en avant trouvé.");
      return res
        .status(404)
        .json({ message: "Aucun artisan mis en avant disponible." });
    }

    console.log(
      "✅ Artisans mis en avant trouvés :",
      JSON.stringify(featuredArtisans, null, 2)
    );
    res.status(200).json(featuredArtisans);
  } catch (err) {
    console.error("❌ Erreur récupération artisans mis en avant :", err);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
};

module.exports = {
  getAllArtisans,
  searchArtisanByName,
  getArtisanByName,
  getArtisansBySpecialty,
  getArtisansByCategory,
  getSpecialtiesByCategory,
  getFeaturedArtisans,
};
