const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Specialite = db.define(
  "Specialite",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "specialites",
    underscored: true, // ✅ Gère automatiquement les noms de colonnes en snake_case
  }
);

module.exports = Specialite;
