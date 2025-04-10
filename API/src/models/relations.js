const Artisan = require("./Artisans");
const Specialite = require("./Specialite");
const Categorie = require("./Categorie");

// 📌 Définition des relations ici pour éviter les dépendances circulaires
Categorie.hasMany(Specialite, { foreignKey: "category_id" });
Specialite.belongsTo(Categorie, { foreignKey: "category_id" });

Specialite.hasMany(Artisan, { foreignKey: "specialite_id" }); // ✅ Renommé
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id" }); // ✅ Renommé

module.exports = {
  Artisan,
  Specialite,
  Categorie,
  registerRelations: () => {},
};
