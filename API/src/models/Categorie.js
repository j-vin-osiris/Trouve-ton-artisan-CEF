const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Categorie = db.define(
  "categorie",
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
  },
  {
    timestamps: false,
    tableName: "categories",
  }
);

module.exports = Categorie;
