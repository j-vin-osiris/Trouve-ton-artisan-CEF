-- MySQL dump 10.13  Distrib 9.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: artisans_db
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artisans`
--

DROP TABLE IF EXISTS `artisans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artisans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `specialite_id` int DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `about` text,
  `email` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `rating` float NOT NULL,
  `top` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `specialty_id` (`specialite_id`),
  CONSTRAINT `artisans_ibfk_1` FOREIGN KEY (`specialite_id`) REFERENCES `specialites` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artisans`
--

LOCK TABLES `artisans` WRITE;
/*!40000 ALTER TABLE `artisans` DISABLE KEYS */;
INSERT INTO `artisans` VALUES (1,'Boucherie Dumont',1,'Lyon','Lorem ipsum dolor sit amet...','boucherie.dumond@gmail.com',NULL,4.5,0),(2,'Au pain chaud',2,'Mont├®limar','Lorem ipsum dolor sit amet...','aupainchaud@hotmail.com',NULL,4.8,1),(3,'Chocolaterie Labb├®',3,'Lyon','Lorem ipsum dolor sit amet...','chocolaterie-labbe@gmail.com','https://chocolaterie-labbe.fr',4.9,1),(4,'Traiteur Truchon',4,'Lyon','Lorem ipsum dolor sit amet...','contact@truchon-traiteur.fr','https://truchon-traiteur.fr',4.1,0),(5,'Orville Salmons',5,'Evian','Lorem ipsum dolor sit amet...','o-salmons@live.com',NULL,5,1),(6,'Mont Blanc ├ëlectricit├®',6,'Chamonix','Lorem ipsum dolor sit amet...','contact@mont-blanc-electricite.com','https://mont-blanc-electricite.com',4.5,0),(7,'Boutot & fils',7,'Bourg-en-Bresse','Lorem ipsum dolor sit amet...','boutot-menuiserie@gmail.com','https://boutot-menuiserie.com',4.7,0),(8,'Vallis Bellemare',8,'Vienne','Lorem ipsum dolor sit amet...','v.bellemare@gmail.com','https://plomberie-bellemare.com',4,0),(9,'Claude Quinn',9,'Aix-les-Bains','Lorem ipsum dolor sit amet...','claude.quinn@gmail.com',NULL,4.2,0),(10,'Amitee L├®cuyer',10,'Annecy','Lorem ipsum dolor sit amet...','a.amitee@hotmail.com','https://lecuyer-couture.com',4.5,0),(11,'Ernest Carignan',11,'Le Puy-en-Velay','Lorem ipsum dolor sit amet...','e-carigan@hotmail.com',NULL,5,0),(12,'Royden Charbonneau',12,'Saint-Priest','Lorem ipsum dolor sit amet...','r.charbonneau@gmail.com',NULL,3.8,0),(13,'Leala Dennis',12,'Chamb├®ry','Lorem ipsum dolor sit amet...','l.dennos@hotmail.fr','https://coiffure-leala-chambery.fr',3.8,0),(14,'C\'est sup\'hair',12,'Romans-sur-Is├¿re','Lorem ipsum dolor sit amet...','sup-hair@gmail.com','https://sup-hair.fr',4.1,0),(15,'Le monde des fleurs',13,'Annonay','Lorem ipsum dolor sit amet...','contact@le-monde-des-fleurs-annonay.fr','https://le-monde-des-fleurs-annonay.fr',4.6,0),(16,'Val├®rie Laderoute',14,'Valence','Lorem ipsum dolor sit amet...','v-laredoute@gmail.com',NULL,4.5,0),(17,'CM Graphisme',15,'Valence','Lorem ipsum dolor sit amet...','contact@cm-graphisme.com','https://cm-graphisme.com',4.4,0),(18,'Artisan VIP',1,'Paris',NULL,NULL,NULL,4.9,1),(19,'Artisan VIP',1,'Paris',NULL,NULL,NULL,4.9,1),(20,'Artisan VIP',1,'Paris',NULL,NULL,NULL,4.9,1),(21,'Artisan VIP',1,'Paris',NULL,NULL,NULL,4.9,1);
/*!40000 ALTER TABLE `artisans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Alimentation'),(2,'B├ótiment'),(3,'Fabrication'),(4,'Services');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialites`
--

DROP TABLE IF EXISTS `specialites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `specialites_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialites`
--

LOCK TABLES `specialites` WRITE;
/*!40000 ALTER TABLE `specialites` DISABLE KEYS */;
INSERT INTO `specialites` VALUES (1,'Boucher',1),(2,'Boulanger',1),(3,'Chocolatier',1),(4,'Traiteur',1),(5,'Chauffagiste',2),(6,'Electricien',2),(7,'Menuisier',2),(8,'Plombier',2),(9,'Bijoutier',3),(10,'Couturier',3),(11,'Ferronnier',3),(12,'Coiffeur',4),(13,'Fleuriste',4),(14,'Toiletteur',4),(15,'Webdesign',4);
/*!40000 ALTER TABLE `specialites` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10 11:51:46
