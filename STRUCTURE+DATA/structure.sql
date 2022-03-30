CREATE DATABASE  IF NOT EXISTS `dbMxVapes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dbMxVapes`;
-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: dbMxVapes
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `idUser` int DEFAULT NULL,
  `idProduct` int DEFAULT NULL,
  `productAmount` int DEFAULT NULL,
  `productPrice` float DEFAULT NULL,
  `fProductPrice` float DEFAULT NULL,
  `finalPrice` float DEFAULT NULL,
  KEY `idUser` (`idUser`),
  KEY `idProduct` (`idProduct`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`idProduct`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productCategory`
--

DROP TABLE IF EXISTS `productCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productCategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productCat` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productCategory`
--

LOCK TABLES `productCategory` WRITE;
/*!40000 ALTER TABLE `productCategory` DISABLE KEYS */;
INSERT INTO `productCategory` VALUES (1,'Kits'),(2,'E-juice'),(3,'Nic-salts'),(4,'Pods'),(5,'CBD'),(6,'Accesories');
/*!40000 ALTER TABLE `productCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) DEFAULT NULL,
  `category` int DEFAULT NULL,
  `product_description` varchar(1000) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `image` blob,
  PRIMARY KEY (`id`),
  KEY `category` (`category`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `productCategory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'SMOK Scar-Mini',1,'The SMOK Scar-Mini Vape Kit is a compact and powerful sub-ohm vape device. Powered by a single 18650 battery, the SMOK Scar Mini kit is capable of up to 80W power output. Paired with the TFV9-Mini vape tank, the Scar Mini utilises the TFV9 Coil series which adopt a meshed coil build for pure flavour and denser clouds.The SMOK Scar-Mini is constructed from zinc alloy and has an IP-67 rated shell, which offers dust, water and shock protections. It\'s diminutive compact size, and ergonomic design makes it a portable solution to the larger Scar 18 vape kit. Taking on a similar design to it\'s bigger brother, the Scar-Mini is finished with metal and leather textured panels. Featuring a 0.69\" OLED display screen, and operated via two adjustment buttons and a single fire button.',900,10,_binary '1642026924855-Scar-Mini-Vape.jpg'),(3,'Aspire Tigon ',1,'El Tigon kit es lo último de Aspire, una de las empresas más conocidas y valoradas desde los inicios del vapeo. El nombre de este dispositivo viene de la mezcla entre dos palabras “tiger” y “lion” y hace referencia a su versatilidad y su capacidad de permitir tanto el vapeo a boca-pulmón como directo a pulmón.El mod tiene una batería interna de 1800mAh de autonomía. Dispone de un botón de disparo de forma oval con un indicador luminoso en su interior. El tanque Tigon tiene un diámetro de 24mm y una capacidad de 2ml acorde con la normativa actual. ',900,20,_binary '1642026060744-contact-high-2.jpg'),(4,'E-JUICE',2,'Ciberate, 3 paquetes de Multi Fruit E Liquid Vape Liquid para Vape E Cigarrillos, Vape Starter Kits Vape con Liquid Vape E Juice para E Cig, (Frambuesa + Cereza + Grosella negra), Sin nicotina    Paquete incluido: 3 botellas de 50 ml de líquido vape, 0 mg de nicotina, 70 VG / 30 PG. E Sabor de jugo: frambuesa + cereza + grosella negra.    Alta calidad: el sabor puro y natural se utiliza en el líquido e. Sin color sintetizado, sin efectos secundarios en la garganta o los pulmones.    Adecuado para todo el kit de Vape: puede usar este líquido en todo tipo de kit de vape y obtener un sabor agradable.    Uso fácil: diseño especial de bloqueo para niños. No se preocupe por los niños abrirlo accidentalmente. (Sin nicotina).    Relleno de boquilla larga: el diseño de punta de goteo de recarga de boquilla larga facilita el llenado, reduce las fugas durante el llenado. Perfecto para todos los kits de inicio de cigarrillos electrónicos.',650,8,_binary '1642015577223-e-juice.jpg'),(6,'KOKO Prime',1,'La nueva versión mejorada del Pod Koko que tan buenos resultados ha dado. Amplía la batería interna a 690mAh respecto a los 520 de su predecesor. Capaz de llegar hasta los 15w de potencia y cuenta con dos configuraciones de entrada de aire, DL y MTL. El Koko Prime permite 2 configuraciones de su sistema de flujo de aire cuando el pod se instala en diferentes direcciones, para ofrecer dos modos de vapeo: un modo de vapeo DL y un modo de vapeo MTL.',800,10,_binary '1648350775337_img.jpg'),(7,'Nic Salts',3,' Prueba este delicioso e-liquid de sales con mezcla de tabacos secos y suaves acompañado de un exquisito toque de horchata con canela que le da ese toque mexicano.',460,15,_binary '1648351093220_img.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userType`
--

DROP TABLE IF EXISTS `userType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userType` (
  `id` int NOT NULL AUTO_INCREMENT,
  `utype` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userType`
--

LOCK TABLES `userType` WRITE;
/*!40000 ALTER TABLE `userType` DISABLE KEYS */;
INSERT INTO `userType` VALUES (1,'Cliente'),(2,'Administrador');
/*!40000 ALTER TABLE `userType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `user_type` int DEFAULT NULL,
  `user_pass` varchar(100) DEFAULT NULL,
  `confirm_pass` varchar(100) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `image` blob,
  PRIMARY KEY (`id`),
  KEY `user_type` (`user_type`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type`) REFERENCES `userType` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Carlos Antonio','Navarro Alvarado','ncarlos47@hotmail.com',1,'$2a$10$xK1g7gEXZJcfOv6EpWC3DOSy9KrbBYATtDQl2XvK00luIL2mnAnMe','$2a$10$j5T9WE8tM4IR.5NBm0wL/eIIPPn3q6tQkTMWwJ4zc4uJUgIXWPaK6','Av. Carlos Lazo',_binary '1648411061167_img.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-28 13:41:38
