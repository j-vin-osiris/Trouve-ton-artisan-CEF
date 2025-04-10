const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Specialite = db.define(
  "Specialite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "specialites", // ✅ Mise à jour du nom de la table
  }
);

module.exports = Specialite;
