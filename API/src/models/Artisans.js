const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // ✅ Vérification du chemin

const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialite_id: {
      // ✅ Renommé pour correspondre à `specialites`
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: { type: DataTypes.STRING, allowNull: false },
    about: { type: DataTypes.TEXT },
    email: { type: DataTypes.STRING },
    website: { type: DataTypes.STRING },
    rating: { type: DataTypes.FLOAT, allowNull: false },
    top: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    timestamps: false,
    tableName: "artisans", // ✅ Vérification du nom de la table
  }
);

module.exports = Artisan;
