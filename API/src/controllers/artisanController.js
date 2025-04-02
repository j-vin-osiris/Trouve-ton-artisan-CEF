const Artisan = require("../models/Artisans"); // Charge le modèle Artisan
const { Sequelize } = require("sequelize"); // Pour les opérateurs Sequelize
const { Op } = require("sequelize");

// Contrôleur pour récupérer tous les artisans
const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchArtisanByName = async (req, res) => {
  const { name } = req.query; // Récupère le paramètre `name` depuis la requête
  try {
    const artisans = await Artisan.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%`, // Recherche partielle sur le nom
        },
      },
      limit: 10, // Limite le nombre de résultats pour optimiser la performance
    });
    res.status(200).json(artisans); // Retourne les artisans correspondants
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getArtisanByName = async (req, res) => {
  const { name } = req.params;
  console.log("Nom de l'artisan reçu :", name);

  try {
    const artisan = await Artisan.findOne({
      where: {
        name: {
          [Op.like]: `%${name}%`, // Permet de récupérer des noms partiels
        },
      },
    });

    console.log("Résultat trouvé :", artisan);

    if (!artisan) {
      console.log("Aucun artisan trouvé !");
      return res.status(404).json({ message: "Artisan non trouvé." });
    }

    res.status(200).json(artisan);
  } catch (err) {
    console.error("Erreur backend :", err);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la récupération de l'artisan." });
  }
};

const getArtisansByCategory = async (req, res) => {
  const { category } = req.params; // Récupère la catégorie depuis l'URL
  try {
    const artisans = await Artisan.findAll({
      where: { category }, // Filtre les artisans par catégorie
    });

    if (artisans.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun artisan trouvé pour cette catégorie." });
    }

    res.status(200).json(artisans); // Retourne les artisans
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des artisans." });
  }
};

const getFeaturedArtisans = async (req, res) => {
  try {
    // Limite à 3 artisans, triés par leur note de manière décroissante
    const featuredArtisans = await Artisan.findAll({
      limit: 3, // Nombre d'artisans à afficher
      order: [["rating", "DESC"]], // Trié par note décroissante
    });

    // Vérifie si des artisans ont été trouvés
    if (!featuredArtisans.length) {
      return res
        .status(404)
        .json({ message: "Aucun artisan en avant pour le moment." });
    }

    res.status(200).json(featuredArtisans); // Envoie les artisans en réponse
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des artisans mis en avant :",
      err
    );
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
};

module.exports = {
  getAllArtisans,
  searchArtisanByName,
  getArtisanByName,
  getArtisansByCategory,
  getFeaturedArtisans,
};
