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

## 🏗 **Structure du projet**

TROUVE-TON-ARTISAN-CEF/ │── 📂 api/ (Backend Node.js/Express) │ ├── 📂 database/ (Scripts SQL) │ ├── 📂 routes/ (Endpoints de l’API) │ ├── 📂 models/ (Modèles Sequelize) │ ├── 📜 server.js (Point d’entrée de l’API) │ │── 📂 front/ (Frontend React) │ ├── 📂 public/ (Images, index.html, manifest.json) │ ├── 📂 src/ (Code source React) │ │ ├── 📂 components/ (Composants réutilisables) │ │ ├── 📂 pages/ (Pages principales) │ │ ├── 📂 scss/ (Fichiers SCSS pour le style) │ │ ├── 📜 App.js (Composant principal) │ │ ├── 📜 index.js (Point d’entrée React) │ │── 📜 README.md (Documentation du projet) │── 📜 package.json (Dépendances du projet) │── 📜 .gitignore (Fichiers à exclure du Git)

---

## ⚙ **Installation**

### 1️⃣ **Base de données**

- **MySQL Workbench**

1. **Créer la base de données** `artisan_db`
2. **Créér la table** 'artisans' :
   'CREATE TABLE artisans (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   specialty VARCHAR(255) NOT NULL,
   rating FLOAT NOT NULL,
   location VARCHAR(255) NOT NULL,
   about TEXT,
   email VARCHAR(255),
   website VARCHAR(255),
   category VARCHAR(255) NOT NULL,
   top TINYINT(1) DEFAULT 0
   );'
3. **Inserer les données dans la table**
   INSERT INTO artisans (name, specialty, rating, location, about, email, website, category, top) VALUES
   ('Boucherie Dumont', 'Boucher', 4.5, 'Lyon', 'Lorem ipsum...', 'boucherie.dumond@gmail.com', NULL, 'Alimentation', 0),
   ('Au pain chaud', 'Boulanger', 4.8, 'Montélimar', 'Lorem ipsum...', 'aupainchaud@hotmail.com', NULL, 'Alimentation', 0),
   ('Chocolaterie Labbé', 'Chocolatier', 4.9, 'Lyon', 'Lorem ipsum...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 'Alimentation', 0);
   ('Traiteur Truchon', 'Traiteur', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 'Alimentation', 0),
   ('Orville Salmons', 'Chauffagiste', 5, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, 'Bâtiment', 0),
   ('Mont Blanc Éléctricité', 'Electricien', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 'Bâtiment', 0),
   ('Boutot & fils', 'Menuisier', 4.7, 'Bourg-en-Bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 'Bâtiment', 0),
   ('Vallis Bellemare', 'Plombier', 4, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 'Bâtiment', 0),
   ('Claude Quinn', 'Bijoutier', 4.2, 'Aix-les-Bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, 'Fabrication', 0),
   ('Amitee Lécuyer', 'Couturier', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 'Fabrication', 0),
   ('Ernest Carignan', 'Ferronier', 5, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', NULL, 'Fabrication', 0),
   ('Royden Charbonneau', 'Coiffeur', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', NULL, 'Services', 0),
   ('Leala Dennis', 'Coiffeur', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 'Services', 0),
   ('C\'est sup\'hair', 'Coiffeur', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', 'Services', 0),
   ('Le monde des fleurs', 'Fleuriste', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 'Services', 0),
   ('Valérie Laderoute', 'Toiletteur', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', NULL, 'Services', 0),
   ('CM Graphisme', 'Webdesign', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 'Services', 0);

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
