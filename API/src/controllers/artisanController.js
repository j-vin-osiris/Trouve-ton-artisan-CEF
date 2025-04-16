const { Artisan, Specialite, Categorie } = require("../models/relations");
const { Op } = require("sequelize");

// Récupérer tous les artisans avec leur spécialité et catégorie
const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [{ model: Specialite, include: [{ model: Categorie }] }],
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Rechercher un artisan par nom
const searchArtisanByName = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { name: { [Op.like]: `%${req.query.name}%` } },
      limit: 10,
    });
    res.status(200).json(artisans);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Récupérer un artisan spécifique par nom
const getArtisanByName = async (req, res) => {
  try {
    const artisan = await Artisan.findOne({
      where: { name: req.params.name },
      include: [{ model: Specialite, include: [{ model: Categorie }] }],
    });
    console.log("Artisan envoyé par l'API :", artisan);

    artisan
      ? res.status(200).json(artisan)
      : res.status(404).json({ message: "Aucun artisan trouvé." });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Récupérer les artisans d'une spécialité spécifique
const getArtisansBySpecialty = async (req, res) => {
  try {
    const specialite = await Specialite.findOne({
      where: { name: req.params.name },
    });

    specialite
      ? res.status(200).json(
          await Artisan.findAll({
            where: { specialite_id: specialite.id },
            include: [{ model: Specialite, include: [{ model: Categorie }] }],
          })
        )
      : res.status(404).json({ message: "Spécialité non trouvée." });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Récupérer les artisans d'une catégorie spécifique
const getArtisansByCategory = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          where: { category_id: req.params.categoryId },
          include: [{ model: Categorie }],
        },
      ],
    });

    artisans.length
      ? res.status(200).json(artisans)
      : res.status(404).json({ message: "Aucun artisan trouvé." });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Récupérer les spécialités d'une catégorie spécifique
const getSpecialtiesByCategory = async (req, res) => {
  try {
    const specialties = await Specialite.findAll({
      where: { category_id: req.params.categoryId },
    });

    specialties.length
      ? res.status(200).json(specialties)
      : res.status(404).json({ message: "Aucune spécialité trouvée." });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Récupérer les artisans mis en avant
const getFeaturedArtisans = async (req, res) => {
  try {
    const featuredArtisans = await Artisan.findAll({
      where: { top: 1 },
      include: [{ model: Specialite, attributes: ["name"] }],
      order: [["rating", "DESC"]],
      limit: 3,
    });

    featuredArtisans.length
      ? res.status(200).json(featuredArtisans)
      : res.status(404).json({ message: "Aucun artisan mis en avant." });
  } catch (err) {
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
