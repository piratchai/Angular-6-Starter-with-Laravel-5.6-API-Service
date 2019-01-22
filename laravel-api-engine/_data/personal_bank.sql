-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: personalbank
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iban` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,13,'LEK','AL','0',1,'2018-06-24 11:55:00','2018-06-24 11:55:00'),(2,19,'LEK','AL47212116041629004483621604','0',1,'2018-06-24 12:02:37','2018-06-24 12:02:37'),(3,20,'LEK','AL47212116041629736783821604','0',1,'2018-06-24 12:03:47','2018-06-24 12:03:47'),(4,21,'LEK','AL47212116046450786120431604','0',1,'2018-06-29 19:46:38','2018-06-29 19:46:38'),(5,21,'LEK','AL47212116052760264401371605','0',1,'2018-07-06 18:55:17','2018-07-06 18:55:17'),(6,21,'EUR','AL47212116052760369618071605','0',1,'2018-07-06 18:55:27','2018-07-06 18:55:27'),(7,21,'LEK','AL47212116052771848337111605','0',1,'2018-07-06 19:13:41','2018-07-06 19:13:41'),(10,21,'LEK','AL47212116052772256353861605','0',1,'2018-07-06 19:14:20','2018-07-06 19:14:20'),(11,21,'LEK','AL47212116052772710906761605','0',1,'2018-07-06 19:15:04','2018-07-06 19:15:04'),(13,21,'LEK','AL47212116052773415266681605','0',1,'2018-07-06 19:16:11','2018-07-06 19:16:11'),(15,21,'LEK','AL47212116052778113598061605','0',1,'2018-07-06 19:23:39','2018-07-06 19:23:39'),(16,21,'LEK','AL47212116052778120157201605','0',1,'2018-07-06 19:23:40','2018-07-06 19:23:40'),(17,21,'LEK','AL47212116052778124560341605','0',1,'2018-07-06 19:23:40','2018-07-06 19:23:40'),(18,21,'LEK','AL47212116052778129561221605','0',1,'2018-07-06 19:23:40','2018-07-06 19:23:40'),(19,21,'LEK','AL47212116052788716257761605','0',1,'2018-07-06 19:40:30','2018-07-06 19:40:30'),(20,21,'LEK','AL47212116052788723597091605','0',1,'2018-07-06 19:40:31','2018-07-06 19:40:31'),(21,21,'LEK','AL47212116052788729361541605','0',1,'2018-07-06 19:40:31','2018-07-06 19:40:31'),(22,21,'LEK','AL47212116052788735186861605','0',1,'2018-07-06 19:40:32','2018-07-06 19:40:32'),(23,21,'LEK','AL47212116052788738749031605','0',1,'2018-07-06 19:40:32','2018-07-06 19:40:32'),(24,21,'LEK','AL47212116052788742124661605','0',1,'2018-07-06 19:40:33','2018-07-06 19:40:33'),(25,21,'LEK','AL47212116052788743665211605','0',1,'2018-07-06 19:40:33','2018-07-06 19:40:33'),(26,21,'LEK','AL47212116052788746433341605','0',1,'2018-07-06 19:40:33','2018-07-06 19:40:33'),(27,21,'LEK','AL47212116052788748018201605','0',1,'2018-07-06 19:40:33','2018-07-06 19:40:33'),(28,21,'LEK','AL47212116052788751022421605','0',1,'2018-07-06 19:40:33','2018-07-06 19:40:33'),(29,21,'LEK','AL47212116052788751957111605','0',1,'2018-07-06 19:40:33','2018-07-06 19:40:33'),(30,21,'LEK','AL47212116052788755471401605','0',1,'2018-07-06 19:40:34','2018-07-06 19:40:34'),(31,21,'LEK','AL47212116052788756402621605','0',1,'2018-07-06 19:40:34','2018-07-06 19:40:34'),(32,21,'LEK','AL47212116052788758347471605','0',1,'2018-07-06 19:40:34','2018-07-06 19:40:34'),(33,21,'LEK','AL47212116052788760313981605','0',1,'2018-07-06 19:40:34','2018-07-06 19:40:34'),(37,21,'LEK','AL47212116052788768607171605','0',1,'2018-07-06 19:40:35','2018-07-06 19:40:35'),(44,21,'USD','AL47212116052850564599511605','0',1,'2018-07-06 21:18:48','2018-07-06 21:18:48'),(48,21,'LEK','AL47212116053274925356761605','0',1,'2018-07-07 08:33:19','2018-07-07 08:33:19'),(49,21,'LEK','AL47212116053274925470021605','0',1,'2018-07-07 08:33:19','2018-07-07 08:33:19'),(50,21,'LEK','AL47212116053274968883381605','0',1,'2018-07-07 08:33:23','2018-07-07 08:33:23'),(51,21,'LEK','AL47212116053275053492111605','0',1,'2018-07-07 08:33:31','2018-07-07 08:33:31');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,21,1,'account',' A new account inserted ',1,'2018-07-05 23:23:32'),(2,21,1,'transaction','A new transaction inserted ',1,'2018-07-05 23:23:32'),(3,21,44,'account','A new Account was saved.',2,'2018-07-06 23:18:48'),(4,21,45,'account','A new Account was saved.',2,'2018-07-07 10:28:01'),(5,21,46,'account','A new Account was saved.',2,'2018-07-07 10:29:38'),(6,21,47,'account','A new Account was saved.',2,'2018-07-07 10:32:53'),(7,21,48,'account','A new Account was saved.',2,'2018-07-07 10:33:19'),(8,21,49,'account','A new Account was saved.',2,'2018-07-07 10:33:19'),(9,21,50,'account','A new Account was saved.',2,'2018-07-07 10:33:23'),(10,21,51,'account','A new Account was saved.',2,'2018-07-07 10:33:31');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (9,'2018_06_14_221402_create_users',1),(10,'2018_06_14_221514_create_password_resets',1),(11,'2018_06_14_225720_create_accounts',1),(12,'2018_06_14_230226_create_transactions',1),(13,'2018_06_14_230414_create_activities',1),(14,'2018_06_15_102016_add_column_username_to_users',1),(15,'2016_06_01_000001_create_oauth_auth_codes_table',2),(16,'2016_06_01_000002_create_oauth_access_tokens_table',2),(17,'2016_06_01_000003_create_oauth_refresh_tokens_table',2),(18,'2016_06_01_000004_create_oauth_clients_table',2),(19,'2016_06_01_000005_create_oauth_personal_access_clients_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('057c137972f2b7423b2dde9a881f99c844a5b51cc7d566794e03b805a28fce3f40a2eabe76e3f10d',2,10,'NGpersonal','[]',0,'2018-06-29 19:11:32','2018-06-29 19:11:32','2019-06-29 21:11:32'),('068ecf6672988a40605e4ad1fde5a066c1a0da484abfab1affdf4568c31257bf5f330ec059aacd6a',21,10,'NGpersonal','[]',0,'2018-07-15 15:57:24','2018-07-15 15:57:24','2019-07-15 17:57:24'),('0c08f9c5ebfa8ecd53b70f18c5c6a2eea735a1b80f965cbc8eea206cef1c7491220f944dc2672c9e',2,10,'NGpersonal','[]',0,'2018-06-23 06:58:43','2018-06-23 06:58:43','2019-06-23 08:58:43'),('0fa6f861de0b4559e9fdadee77cddf0ab6a78c0012c564a51d9b5cfa14be080a93cde7de2c9445b0',21,10,'NGpersonal','[]',0,'2018-07-06 20:37:54','2018-07-06 20:37:54','2019-07-06 22:37:54'),('11f7a8a1e38c6d3742b08c06d9394ea16816eab4250f9d7ede432838ef21f1227f828de650e45bfb',21,10,'NGpersonal','[]',0,'2018-07-13 19:46:18','2018-07-13 19:46:18','2019-07-13 21:46:18'),('2bce80f3528261d5348abf5f49ca8ea2a9542a8d1c8ca96cca64b9a645d5b9abf29720b70d1dbaf7',2,10,'NGpersonal','[]',0,'2018-06-23 11:33:51','2018-06-23 11:33:51','2019-06-23 13:33:51'),('2e9e1c7e4a64021684fc36e0625a614ca3beb621c9ce116bc5174ded074914a3818acabadb6f8787',1,5,'NGpersonal','[]',0,'2018-06-22 21:57:40','2018-06-22 21:57:40','2019-06-22 23:57:40'),('2ea7de47e3a0f87096b98e419986c9d60eedf94901460bf481814b860f96a6df888bd963fb86c9f9',21,10,'NGpersonal','[]',0,'2018-07-15 15:53:05','2018-07-15 15:53:05','2019-07-15 17:53:05'),('358d8325ebb63a553a4747b1744ea63befda4f118d3dfe2ac03ada7275c37fa5a277927b429b7d37',1,10,'NGpersonal','[]',0,'2018-06-23 06:36:05','2018-06-23 06:36:05','2019-06-23 08:36:05'),('35b1cbe9e0a87dfef81170c8ce9aafea03820a24791c452d0877afdca6e2b21e8f9cee95a6772fab',2,10,'NGpersonal','[]',0,'2018-06-23 10:35:44','2018-06-23 10:35:44','2019-06-23 12:35:44'),('37bce1328caaf8d235b1a76f19ce5368ae197544b46356d9b59296b98271ae2ec466e542012d9e21',1,1,'MyApp','[]',0,'2018-06-22 20:29:52','2018-06-22 20:29:52','2019-06-22 22:29:52'),('3d7aa8a3cc0a89b6daa66e44354a778cbd349b38cb3e79d6d87074931080d027ded70567a2702c97',21,10,'NGpersonal','[]',0,'2018-07-14 06:55:16','2018-07-14 06:55:16','2019-07-14 08:55:16'),('47a7f46771054d736e2471fd16f21e845245cda91232ed74596e1320a929200f4746b0a0ffc9c6d5',2,10,'NGpersonal','[]',0,'2018-07-05 19:55:16','2018-07-05 19:55:16','2019-07-05 21:55:16'),('4f6cb21a6cd5a1ee060f98b8b7cb6ca6e57fdb68285c6ca3c7dc86e1023315b3351f23f2a4fb30a0',2,10,'NGpersonal','[]',0,'2018-06-28 20:36:15','2018-06-28 20:36:15','2019-06-28 22:36:15'),('5325d88ec57c88a973adb546e85d6724df5f72753d4121011a20963467c5c7d4f1d092ad6e28be90',1,1,'MyApp','[]',0,'2018-06-22 20:21:16','2018-06-22 20:21:16','2019-06-22 22:21:16'),('59cc0a65bea0e7b8f34f683fee8a7c641f77140434bf37c2a495c0eaf7dd59eafd3fb750fb9cfe85',21,10,'NGpersonal','[]',0,'2018-07-15 15:58:35','2018-07-15 15:58:35','2019-07-15 17:58:35'),('5c889fe1fe97ff864c45176ac301a34d39c5e2cd96b7e674ee1b2ebcb96ba15360e581ad4b44bad2',2,10,'NGpersonal','[]',0,'2018-06-28 20:35:55','2018-06-28 20:35:55','2019-06-28 22:35:55'),('5d7cbd3a0e21981eab28357df45c109912499184365970e4fc757b93118cb0bacb2081ae79c00256',2,10,'NGpersonal','[]',0,'2018-06-28 20:15:30','2018-06-28 20:15:30','2019-06-28 22:15:30'),('5dec82137562ea51bbb9204d24f10bfa92b8f7f54be38f80681179e95ade8e917101ceb7f2b7b017',2,10,'NGpersonal','[]',0,'2018-06-23 09:44:32','2018-06-23 09:44:32','2019-06-23 11:44:32'),('62ed786a080e4ff128deeeb9fbe138c70c45dc51be23d9c569c0c95f6626552a3a16c48b77d78c44',21,10,'NGpersonal','[]',0,'2018-07-15 15:55:09','2018-07-15 15:55:09','2019-07-15 17:55:09'),('645fdba3ce7285edbe26014dd3073cf79d13e560139d47b457334e398868277f4c67f72768d2c4b9',21,10,'NGpersonal','[]',0,'2018-07-15 15:43:13','2018-07-15 15:43:13','2019-07-15 17:43:13'),('6aa7ac4851828f584dd28c2182df186edee8122b2c3c3169c363e3b3cf3d2125ea47a0783f895b97',2,10,'NGpersonal','[]',0,'2018-06-23 10:23:20','2018-06-23 10:23:20','2019-06-23 12:23:20'),('6caaaa66c083d76f4a9c75a2f5bd5c46bb892b6151be91b279b7d2ae50787d6929e30778a58f8211',2,10,'NGpersonal','[]',0,'2018-06-28 20:36:27','2018-06-28 20:36:27','2019-06-28 22:36:27'),('735a3b541a311552f1e3f99675aa3e0627e37374f02e063edbbb554f048f92f9eeba17ff3550b479',2,10,'NGpersonal','[]',0,'2018-06-29 20:56:43','2018-06-29 20:56:43','2019-06-29 22:56:43'),('760f7bb99df04f8913fe720532c5f8e40c85b4980715a536f7752a2d6aaf3b3061d88f0f32f7f695',2,10,'NGpersonal','[]',0,'2018-06-23 06:46:54','2018-06-23 06:46:54','2019-06-23 08:46:54'),('762de392e30c9b12a064184b0e41d9d6984fa0c91f6e523767161b8de9a5a130ddda71f1c3d91da2',1,9,'NGpersonal','[]',0,'2018-06-23 06:33:18','2018-06-23 06:33:18','2019-06-23 08:33:18'),('76324061e78c85b5bb92c91181634ebc6d08e545c2e2c46cdcbfccaf13f9e017b841cf4dbc50404a',21,10,'NGpersonal','[]',0,'2018-07-15 15:40:35','2018-07-15 15:40:35','2019-07-15 17:40:35'),('7933b52a78c7649e6d7911a4018c8089dad98cc39aeecbbd4ca53f39dcc03fd93866a4a4b061c9e3',2,10,'NGpersonal','[]',0,'2018-06-29 20:57:28','2018-06-29 20:57:28','2019-06-29 22:57:28'),('7aa37007ca97c2cab600204ac56530e00cc8c44ec347970f7b83e4e65baf60263f81f19fae752b82',2,10,'NGpersonal','[]',0,'2018-06-29 21:01:24','2018-06-29 21:01:24','2019-06-29 23:01:24'),('7ab715d8fc153a12f1248e118ebcddd9cb5db1819fe4ce284ad189bbe4e8a48104da49d5f948399b',2,10,'NGpersonal','[]',0,'2018-06-28 20:04:23','2018-06-28 20:04:23','2019-06-28 22:04:23'),('8164a4d91b899f71432cda8eff75579624ca058d0ac18b1f8a60104d4a7b8086244396f1f9e043e6',2,10,'NGpersonal','[]',0,'2018-06-23 10:35:43','2018-06-23 10:35:43','2019-06-23 12:35:43'),('871e83bda871d96a1122d726de3f7437c694e6973b624e6e4c265120e14e2fb79265fab6f67d59c9',2,10,'NGpersonal','[]',0,'2018-07-02 20:59:27','2018-07-02 20:59:27','2019-07-02 22:59:27'),('8e597b4c497b0d0b289f2c112a5154d157bd2c460d7236f0bbf621c0821e70244bd86e7f87e7e0ad',1,10,'NGpersonal','[]',0,'2018-06-23 06:37:11','2018-06-23 06:37:11','2019-06-23 08:37:11'),('912809f077bafd41b0d54e40f198e16bf4c51337fef1b22f454277151a194280f6c50021c296f81a',2,10,'NGpersonal','[]',0,'2018-06-23 12:37:07','2018-06-23 12:37:07','2019-06-23 14:37:07'),('964451b3d7d141365b66a5bb9fd6354ca644beec8c6657b27c32fcadfbf7d136d2b3b5b5579ea124',21,10,'NGpersonal','[]',0,'2018-07-15 15:45:40','2018-07-15 15:45:40','2019-07-15 17:45:40'),('9e51e6c163392772ba7c73b06705fa2a09070e69ea3e0cf6b6b35133d26655088929e4a31e552bef',2,10,'NGpersonal','[]',0,'2018-06-23 06:42:26','2018-06-23 06:42:26','2019-06-23 08:42:26'),('9fe802ffe7066cddced081ca233ad7dfa2c54042a1f22a733e9ed0d578601a52426568f880d16f06',1,5,'MyApp','[]',0,'2018-06-22 20:33:29','2018-06-22 20:33:29','2019-06-22 22:33:29'),('a08a35768c4ced5ad6de2774e6330edbbbd9a54e493932f8e94d87e6364a2a4801da7147c7dc03a1',1,10,'NGpersonal','[]',0,'2018-06-23 06:37:12','2018-06-23 06:37:12','2019-06-23 08:37:12'),('a357bc969455ecb90aed0ac4d66c2713f67a93cec2d65a993530534b38164daeb669a783776ce979',1,5,'NGpersonal','[]',0,'2018-06-23 06:21:26','2018-06-23 06:21:26','2019-06-23 08:21:26'),('a44a1d998b25f18174b4a73790a4db22265a2367e7f5b4b4433e2426cd18adc2989c33a6c86869bc',1,5,'MyApp','[]',0,'2018-06-22 20:40:14','2018-06-22 20:40:14','2019-06-22 22:40:14'),('ab3c473fe723ad76f5223aca3a6a1398268fc8f0ac509a4ddcbf40c949477e182a946c3f98821636',21,10,'NGpersonal','[]',0,'2018-07-05 20:03:10','2018-07-05 20:03:10','2019-07-05 22:03:10'),('aec97ee26dd309510243d909f83e0522dd8d7df4b84979f37002c01c09c110773596715499de7479',1,1,'MyApp','[]',0,'2018-06-22 20:29:51','2018-06-22 20:29:51','2019-06-22 22:29:51'),('af2f9ecf097b7db0d32c3e2cde4d86dd167795394d03ee0b4d42f34d0ac5219d41b7dcad65eb1c26',21,10,'NGpersonal','[]',0,'2018-07-15 15:28:52','2018-07-15 15:28:52','2019-07-15 17:28:52'),('b01c0dd5ee8b3f9726dcca5e83bba9e917b0269913d02a3890d1e95c8ef821154e3e8ba7c4ba4dc1',2,10,'NGpersonal','[]',0,'2018-06-23 10:35:41','2018-06-23 10:35:41','2019-06-23 12:35:41'),('b38bee88c455933951f7f826e882c395f86d64dc8b2b888faa4a4d360e4d1a9ac2aebe87a428fd44',1,1,'MyApp','[]',0,'2018-06-22 20:16:08','2018-06-22 20:16:08','2019-06-22 22:16:08'),('b58030265885f3282e0d1f9554beb06a15f13424291b68d119d772adb2cb42c3eb4029bac9188a38',2,10,'NGpersonal','[]',0,'2018-06-29 20:32:13','2018-06-29 20:32:13','2019-06-29 22:32:13'),('bc334bc31761d059edcfbef4e2bbfe4aa3c0d2c79ff89b88cb8bd592ba5d6233a56b7f88376fab1a',21,10,'NGpersonal','[]',0,'2018-06-29 19:48:29','2018-06-29 19:48:29','2019-06-29 21:48:29'),('bc9f8c8c5b9e5852842df772a3a0dcbb9f2d8380e4862ba420c33cf2304a92289ad642fec8d22c89',21,10,'NGpersonal','[]',0,'2018-07-15 15:30:35','2018-07-15 15:30:35','2019-07-15 17:30:35'),('c1c2f54abc23438ad4e3fe351438e709dbcd1d86ef0690e0f59b5d599b8de6ad58ab902bdb4ed76e',21,10,'NGpersonal','[]',0,'2018-07-11 20:07:01','2018-07-11 20:07:01','2019-07-11 22:07:01'),('c711e707f39e08c9902d28e5fe21aa091f4dfbd0e55e62b2417e5f6a1a95bdf03aaaf28741768b8d',1,5,'MyApp','[]',0,'2018-06-22 20:39:05','2018-06-22 20:39:05','2019-06-22 22:39:05'),('d9ec9638911fb03f29fe708e6ea355a40e4d28fc83429262683bb255b79c7364e94e8e222d85b3ba',2,10,'NGpersonal','[]',0,'2018-06-24 11:27:44','2018-06-24 11:27:44','2019-06-24 13:27:44'),('dd16454526582ddb26a95813437d7d087f81dfb12895123851a51fe590ccdae868f8fe8390690f9b',1,10,'NGpersonal','[]',0,'2018-06-23 06:37:11','2018-06-23 06:37:11','2019-06-23 08:37:11'),('debc48cccda6815558b1ac8c65273405a4fa6dcccb7b74a899d87d52b6ffb267250cab5912675cdf',21,10,'NGpersonal','[]',0,'2018-07-13 21:12:30','2018-07-13 21:12:30','2019-07-13 23:12:30'),('e067c71375a588a7842f1df4655067d3487efb34ad9185f6e770b3f8977363f22e24fd1d1607d11f',2,10,'NGpersonal','[]',0,'2018-06-23 09:27:34','2018-06-23 09:27:34','2019-06-23 11:27:34'),('e088d1a13404751b6296c307986fc798e80ce0dc596b362c4e833287d167bc98a9ce6cce2b455366',21,10,'NGpersonal','[]',0,'2018-07-05 20:51:45','2018-07-05 20:51:45','2019-07-05 22:51:45'),('e48bddfa8c3ca16fdfa1c81adbf1de071d7e013a26701649e7489f17d604213a8b8b85611b3a8132',21,10,'NGpersonal','[]',0,'2018-07-15 15:40:19','2018-07-15 15:40:19','2019-07-15 17:40:19'),('eb67c3cd8b6518dd805a4e83ac552d2ec049a50a0a4be49aa3385e5c9ef8c15b63bd93fb4b5923b5',21,10,'NGpersonal','[]',0,'2018-07-15 15:47:02','2018-07-15 15:47:02','2019-07-15 17:47:02'),('ed0a37be33b1c0db283472ef505c0c43fa51cb173112ef8d519471f70289a03414fa68b1e30db353',21,10,'NGpersonal','[]',0,'2018-07-05 20:38:54','2018-07-05 20:38:54','2019-07-05 22:38:54'),('ed605351e58ca26703c23abc5e4c4560aef0a10f5606cd16273828853d4c6c845a5ed9ccdc358b70',21,10,'NGpersonal','[]',0,'2018-07-15 15:59:48','2018-07-15 15:59:48','2019-07-15 17:59:48'),('f6cf3880a93c8e3ca14d591a0db37a80f1e7ecfd67834c865d9d10dccc702e87bef03839046d29d4',2,10,'NGpersonal','[]',0,'2018-06-23 10:35:43','2018-06-23 10:35:43','2019-06-23 12:35:43'),('f7849a3c2833946ed14e13db356392a309919b6aef4896159b7d605c631792bf5832ca825bfbfe33',1,1,'MyApp','[]',0,'2018-06-22 20:29:55','2018-06-22 20:29:55','2019-06-22 22:29:55'),('f7b0a9d2ea154ee0a6be90b191c23f1fccecc6b1cf2730ce31566856ccbb80ed9286ca1fbec9cd2f',1,10,'NGpersonal','[]',0,'2018-06-23 06:37:09','2018-06-23 06:37:09','2019-06-23 08:37:09'),('fa2aaabb6557de0b6a8d243fd9ce93cd959fdafa3819233e0e8471fb0cf8faf62f0e4f07487ffc1a',2,10,'NGpersonal','[]',0,'2018-06-23 10:35:44','2018-06-23 10:35:44','2019-06-23 12:35:44');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (10,1,'Klevis Cipi','Jt3cmchXcg8IIwBUdEkI0DL2IJxIDSyi6nYHX7ty','http://localhost',1,0,0,'2018-06-23 06:35:56','2018-06-23 06:35:56');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2018-06-22 19:33:43','2018-06-22 19:33:43'),(2,3,'2018-06-22 20:31:11','2018-06-22 20:31:11'),(3,5,'2018-06-22 20:31:22','2018-06-22 20:31:22'),(4,9,'2018-06-23 06:32:19','2018-06-23 06:32:19'),(5,10,'2018-06-23 06:35:56','2018-06-23 06:35:56');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL,
  `ammount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,4,'190.12','T-Shirt from btn store. ',1,NULL,NULL);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_password_unique` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'kelvis','cipi','cipiklevis@gmail.com','klevis','$2y$10$w1VX9a1eorPwDNi1ZDUD4uSne09FbvIy/xD9Lr9V3NEYJZR66ftCK',NULL,NULL,NULL,1,NULL,'2018-06-22 20:14:55','2018-06-22 20:14:55'),(2,'admin','admin','admin@gmail.com','admin','$2y$10$IkHjTIgCB1tBebqzD8CskumlHJigwYMGsToCEM1Xz564P4Om7Uoqy',NULL,NULL,NULL,1,NULL,'2018-06-23 06:40:49','2018-06-23 06:40:49'),(13,'testaccount','testaccount','testaccount@gmail.com','testaccount','$2y$10$Em88t./YBlFtcbrWuIN6kugac9WrTo4cCyYjZj3lOe/9nmIfiHaMy',NULL,NULL,NULL,1,NULL,'2018-06-24 11:55:00','2018-06-24 11:55:00'),(19,'testaccount','testaccount','testaccount1@gmail.com','testaccount','$2y$10$OOiWj4qRbN5mQUt.OOO8Ee/1aXrhWLALiVautNUFZDaMznGgh2Q2K',NULL,NULL,NULL,1,NULL,'2018-06-24 12:02:37','2018-06-24 12:02:37'),(20,'testaccount','testaccount','testaccount3@gmail.com','testaccount2','$2y$10$Blqeha/zMjB5eOskTIRrOe3/s7fqhm6sIq0sd36JmSJ.Ula8ltGAm',NULL,NULL,NULL,1,NULL,'2018-06-24 12:03:47','2018-06-24 12:03:47'),(21,'Test One','Test Tow','cipiklevis@gtm.com','teset124','$2y$10$4gqoC/Hn5xW9s.45ABK//uBJEWqDhyNA7.fYHA15B9xUw2gNx1EiC',NULL,NULL,NULL,1,NULL,'2018-06-29 19:46:38','2018-06-29 19:46:38');
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

-- Dump completed on 2018-07-15 21:20:35
