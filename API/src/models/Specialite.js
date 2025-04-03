const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Categorie = require("./Categorie"); // 🔗 Relation avec Categorie.js

const Specialite = db.define(
  "specialite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Categorie,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "specialties",
  }
);

module.exports = Specialite;
