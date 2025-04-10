# 🛠 Trouve Ton Artisan  

Plateforme de mise en relation entre **particuliers et artisans** de la région **Auvergne-Rhône-Alpes**.  

---

## 📌 Présentation  

Trouve Ton Artisan est une **application web** facilitant la recherche d’artisans qualifiés.  
Les utilisateurs peuvent :  

- ✔ **Naviguer par catégories d’artisanat**  
- ✔ **Filtrer par spécialité**  
- ✔ **Rechercher un artisan par nom**  
- ✔ **Consulter les profils détaillés** (localisation, spécialité, avis clients)  
- ✔ **Contacter les artisans via un formulaire intégré**  

🚀 **Optimisé pour une expérience utilisateur fluide et efficace.**  

---

## 🔧 Prérequis  

Avant d’installer le projet, assurez-vous d’avoir :  

- ✅ **Node.js** (`>= 16.x`)  
- ✅ **MySQL** (`>= 8.x`)  
- ✅ **npm** (`>= 8.x`)  

💡 **Installez MySQL Workbench pour gérer votre base de données.**  

---

## ⚙ Installation  

### 1️⃣ Base de données  

1. **Créer la base de données MySQL** : `artisans_db`  
2. **Exécuter les scripts SQL** pour initialiser la structure :  
   mysql -u root -p artisans_db < database/schema.sql
3. **Insérer les données de base** :
   mysql -u root -p artisans_db < database/seed.sql
4. **Restaurer une sauvegarde complète (si nécessaire) :**
   mysql -u root -p artisans_db < database/artisans_db_backup.sql

### 2️⃣ Dépendances utilisées

🔹 Backend : Node.js, Express, Sequelize, MySQL

🔹 Frontend : React, Bootstrap, Sass

🔹 Sécurité : Helmet, CORS, RateLimiters

### 3️⃣ Lancer le serveur backend
📌 Démarrage de l’API :
cd api
node app.js

### 4️⃣ Lancer le frontend React
📌 Démarrage du client web :
cd front
npm start

🚀 Fonctionnalités
✔ Navigation par catégories d’artisanat

✔ Filtrage avancé par spécialité

✔ Recherche rapide d’artisans

✔ Visualisation détaillée des profils

✔ Formulaire de contact intégré

✔ Design responsive (mobile, tablette, desktop)

✔ Optimisation SEO (titres et descriptions dynamiques)

✔ Page 404 personnalisée
