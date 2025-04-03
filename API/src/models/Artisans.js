const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Specialite = require("./Specialite"); // 🔗 Relation avec Specialite.js

const Artisan = db.define(
  "artisan",
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
    specialty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Specialite,
        key: "id",
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    tableName: "artisans",
  }
);

module.exports = Artisan;
