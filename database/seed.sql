INSERT INTO categories (name) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

INSERT INTO specialties (name, category_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronnier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

INSERT INTO artisans (name, specialty_id, location, about, email, website, rating, top) VALUES
('Boucherie Dumont', 1, 'Lyon', 'Lorem ipsum dolor sit amet...', 'boucherie.dumond@gmail.com', NULL, 4.5, 0),
('Au pain chaud', 2, 'Montélimar', 'Lorem ipsum dolor sit amet...', 'aupainchaud@hotmail.com', NULL, 4.8, 0),
('Chocolaterie Labbé', 3, 'Lyon', 'Lorem ipsum dolor sit amet...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 4.9, 0),
('Traiteur Truchon', 4, 'Lyon', 'Lorem ipsum dolor sit amet...', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 4.1, 0),
('Orville Salmons', 5, 'Evian', 'Lorem ipsum dolor sit amet...', 'o-salmons@live.com', NULL, 5.0, 1),
('Mont Blanc Électricité', 6, 'Chamonix', 'Lorem ipsum dolor sit amet...', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 4.5, 0),
('Boutot & fils', 7, 'Bourg-en-Bresse', 'Lorem ipsum dolor sit amet...', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 4.7, 0),
('Vallis Bellemare', 8, 'Vienne', 'Lorem ipsum dolor sit amet...', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 4.0, 0),
('Claude Quinn', 9, 'Aix-les-Bains', 'Lorem ipsum dolor sit amet...', 'claude.quinn@gmail.com', NULL, 4.2, 0),
('Amitee Lécuyer', 10, 'Annecy', 'Lorem ipsum dolor sit amet...', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 4.5, 0),
('Ernest Carignan', 11, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet...', 'e-carigan@hotmail.com', NULL, 5.0, 0),
('Royden Charbonneau', 12, 'Saint-Priest', 'Lorem ipsum dolor sit amet...', 'r.charbonneau@gmail.com', NULL, 3.8, 0),
('Leala Dennis', 12, 'Chambéry', 'Lorem ipsum dolor sit amet...', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 3.8, 0),
('C\'est sup\'hair', 12, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet...', 'sup-hair@gmail.com', 'https://sup-hair.fr', 4.1, 0),
('Le monde des fleurs', 13, 'Annonay', 'Lorem ipsum dolor sit amet...', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 4.6, 0),
('Valérie Laderoute', 14, 'Valence', 'Lorem ipsum dolor sit amet...', 'v-laredoute@gmail.com', NULL, 4.5, 0),
('CM Graphisme', 15, 'Valence', 'Lorem ipsum dolor sit amet...', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 4.4, 0);

-- 🔥 Cette requête met à jour les artisans "top"
-- 💡 Pour changer les artisans mis en avant, modifier la condition "WHERE name = ..."
SET SQL_SAFE_UPDATES = 0;
UPDATE artisans SET top = 1 WHERE name = 'Au pain chaud';
UPDATE artisans SET top = 1 WHERE name = 'Chocolaterie Labbé';
SET SQL_SAFE_UPDATES = 1;
