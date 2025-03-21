const Artisan = require("../models/Artisans"); // Charge le modèle Artisan
const { Sequelize } = require("sequelize"); // Pour les opérateurs Sequelize

// Contrôleur pour récupérer tous les artisans
const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Contrôleur pour rechercher un artisan par nom
const searchArtisanByName = async (req, res) => {
  const { name } = req.query; // Récupère le paramètre `name`
  try {
    const artisans = await Artisan.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`, // Recherche partielle sur le nom
        },
      },
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchArtisanByCategory = async (req, res) => {
  const { category } = req.query; // Récupère le paramètre `category`
  try {
    // Recherche des artisans où la catégorie correspond exactement à la valeur donnée
    const artisans = await Artisan.findAll({
      where: {
        category: category, // Correspondance stricte avec la catégorie
      },
    });
    // Si aucun artisan trouvé
    if (artisans.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun artisan trouvé dans cette catégorie." });
    }
    res.json(artisans); // Retourne les artisans correspondant à la catégorie
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la recherche par catégorie." });
  }
};

module.exports = {
  getAllArtisans,
  searchArtisanByName,
  searchArtisanByCategory,
};
