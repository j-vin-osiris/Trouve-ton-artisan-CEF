# Trouve Ton Artisan 🛠

Plateforme de mise en relation entre **particuliers et artisans** de la région **Auvergne-Rhône-Alpes**.

---

## 📌 **Présentation**

Trouve Ton Artisan est une application web permettant aux particuliers de trouver facilement un artisan qualifié et de le contacter via un formulaire intuitif. Les artisans sont répertoriés **par catégories** et leurs profils incluent leurs **spécialités, localisations et avis clients**.

---

## 🔧 **Prérequis**

Avant d’installer ce projet, assurez-vous d’avoir les éléments suivants :

- **Node.js** (`>= 16.x`)
- **MySQL** (`>= 8.x`)
- **npm** (`>= 8.x`)

---


## ⚙ **Installation**

### 1️⃣ **Base de données**

- **MySQL Workbench**

1. **Créer la base de données MYSQL** `artisan_db`
2. **Exécutez les scripts SQL:**
      -schema.sql
3. **Inserer les données dans la table**
      -seed.sql
   

### 2️⃣ **Dépendances Utilisée**

- **Backend : Node.js, Express, Sequelize, MySQL**
- **Frontend : React, Bootstrap, Sass**
- **Sécurité : Helmet, CORS, RateLimiters**

### 3️⃣ **Lancer l’API backend**

_bash_
_cd api_
_node app.js_

### 4️⃣ **Lancer le frontend React**

_bash_
_cd front_
_npm start_

🚀 Fonctionnalités
✔ Navigation par catégories d'artisanat ✔ Filtrage par spécialité ✔ Recherche d'artisans par nom ✔ Visualisation détaillée des profils d'artisans ✔ Formulaire de contact ✔ Design responsive (mobile, tablette, desktop) ✔ Optimisation SEO (titres et descriptions dynamiques) ✔ Page 404 personnalisée
