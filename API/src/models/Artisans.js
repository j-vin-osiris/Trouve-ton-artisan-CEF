const { DataTypes } = require("sequelize"); // Importe les types de données
const sequelize = require("../config/database"); // Charge la configuration de la base

// Définition du modèle Artisan
const Artisan = sequelize.define(
  "Artisan",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Nom obligatoire
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false, // Spécialité obligatoire
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false, // Note obligatoire
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false, // Ville obligatoire
    },
    about: {
      type: DataTypes.TEXT, // Description optionnelle
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true, // Validation des adresses e-mail
      },
    },
    website: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true, // Validation des URL
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false, // Catégorie obligatoire
    },
    top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Par défaut, l'artisan n'est pas vedette
    },
  },
  {
    timestamps: false, // Désactive `createdAt` et `updatedAt`
  }
);

module.exports = Artisan; // Exporte le modèle pour l'utiliser ailleurs
