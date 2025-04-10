const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Categorie = db.define(
  "Categorie",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    timestamps: false,
    tableName: "categories",
    underscored: true, // ✅ Assure une convention cohérente des noms de colonnes
  }
);

module.exports = Categorie;
