# ************************************************************
# Sequel Pro SQL dump
# Version 4135
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.42)
# Database: camcardb
# Generation Time: 2016-01-29 16:10:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table camBanners
# ------------------------------------------------------------

CREATE TABLE `camBanners` (
  `BAN_Id` bigint(100) NOT NULL AUTO_INCREMENT,
  `BAN_AGN_Nombre` varchar(200) NOT NULL DEFAULT '',
  `BAN_SRC650x277` varchar(200) NOT NULL DEFAULT '',
  `BAN_SRC900x586` varchar(200) NOT NULL DEFAULT '',
  `BAN_SRC1600x900` varchar(200) NOT NULL DEFAULT '',
  `BAN_Title` varchar(200) NOT NULL DEFAULT '',
  `BAN_Subtitle01` varchar(200) NOT NULL DEFAULT '',
  `BAN_Subtitle02` varchar(200) NOT NULL DEFAULT '',
  `BAN_Subtitle03` varchar(200) NOT NULL DEFAULT '',
  `BAN_Subtitle04` varchar(200) NOT NULL DEFAULT '',
  `BAN_PrimaryLinkUrl` varchar(200) NOT NULL DEFAULT '',
  `BAN_PrimaryLinkSub` varchar(100) NOT NULL DEFAULT '',
  `BAN_SecondaryLinkUrl` varchar(200) NOT NULL DEFAULT '',
  `BAN_SecondaryLinkSub` varchar(100) NOT NULL DEFAULT '',
  `BAN_Tipo` varchar(50) NOT NULL DEFAULT '',
  `BAN_Status` int(11) NOT NULL,
  PRIMARY KEY (`BAN_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

LOCK TABLES `camBanners` WRITE;
/*!40000 ALTER TABLE `camBanners` DISABLE KEYS */;

INSERT INTO `camBanners` (`BAN_Id`, `BAN_AGN_Nombre`, `BAN_SRC650x277`, `BAN_SRC900x586`, `BAN_SRC1600x900`, `BAN_Title`, `BAN_Subtitle01`, `BAN_Subtitle02`, `BAN_Subtitle03`, `BAN_Subtitle04`, `BAN_PrimaryLinkUrl`, `BAN_PrimaryLinkSub`, `BAN_SecondaryLinkUrl`, `BAN_SecondaryLinkSub`, `BAN_Tipo`, `BAN_Status`)
VALUES
	(1,'Peugeot León','banner_peugeot_650x277.jpg','banner_peugeot_900x586.jpg','banner_peugeot_1600x900.jpg','PEUGEOT LEÓN','INAUGURACIÓN PEUGEOT LEÓN','','','','#/noticias/peugeot-leon/el-leon-vuelve-a-rugir-en-guanajuato/12','VER NOTICIA','','','noticia',1),
	(2,'Ford Cavsa','banner_ford_650x277.jpg','banner_ford_900x586.jpg','banner_ford_1600x900.jpg','FORD CAVSA','FORD ECOSPORT','DESDE $3,639 MENSUALES','UN AÑO DE SEGURO SIN COSTO. ','','http://www.fordcavsa.com.mx/Cotizador/','COTIZACIÓN','','','sitio',0),
	(3,'Mitsubishi','banner_mitsubishi_650x277.jpg','banner_mitsubishi_900x586.jpg','banner_mitsubishi_1600x900.jpg','MITSUBISHI','COMPRA UN MITSUBISHI 2015-2016','¡Y OBTÉN 7 AÑOS DE GARANTÍA!','','','http://mitsubishicentrogdl.com.mx/','IR AL SITIO','','','sitio',1),
	(4,'Mercedes Benz','banner_mercedes_650x277.jpg','banner_mercedes_900x586.jpg','banner_mercedes_1600x900.jpg','MERCEDES BENZ.','CLASE C 2016','CON MENSUALIDADES DESDE $3,625 PESOS','','','../img/sitio/files/Anun-Fast Start-V2-ene-Excelsior-RSVP-23.93x26_adaptado.pdf','PROMOCIÓN','','','promo',1),
	(5,'SYC Motors','banner_sycmotors_650x277.jpg','banner_sycmotors_900x586.jpg','banner_sycmotors_1600x900.jpg','ATTITUDE 2016','SEGURO GRATIS POR UN AÑO','ENGANCHE DESDE 10%','PLAZOS HASTA 72 MESES','','http://www.syc-motors.com.mx/','IR AL SITIO','','','sitio',1),
	(6,'Lincoln','banner_lincoln_650x277.jpg','banner_lincoln_900x586.jpg','banner_lincoln_1600x900.jpg','LINCOLN 2016','HASTA 24 MESES SIN INTERESES','Ó UN BONO DE 30 MIL PESOS.','','','http://lincolngdl.com.mx/','IR AL SITIO','','','sitio',1),
	(7,'Volvo','banner_volvo_650x277.jpg','banner_volvo_900x586.jpg','banner_volvo_1600x900.jpg','VOLVO XC60','BONO DE HASTA $95,000','+ TASA DEL 7.7%','','','#/agencias/nuevos/volvo','VER AGENCIA','','','agencias',1),
	(8,'VW Euroalemana','banner_vw_650x277.jpg','banner_vw_900x586.jpg','banner_vw_1600x900.jpg','JETTA 2016','DESDE $219,900 + SEGURO GRATIS.','*APLICAN RESTRICCIONES.','','','http://www.vw-euroalemana.com.mx/Promociones/','IR AL SITIO','','','sitio',1),
	(9,'Jaguar Land Rover','banner_jaguar_650x277.jpg','banner_jaguar_900x586.jpg','banner_jaguar_1600x900.jpg','NUEVO JAGUAR XE','TIPO DE CAMBIO PREFERENCIAL DE $16.40','Y MENSUALIDADES DESDE $10,500 MX.','','','http://jaguargdl.com/','IR AL SITIO','','','sitio',1),
	(10,'Jaguar Land Rover','banner_landrover_650x277.jpg','banner_landrover_900x586.jpg','banner_landrover_1600x900.jpg','DISCOVERY SPORT','TIPO DE CAMBIO PREFERENCIAL DE $13.90','Y MENSUALIDADES DESDE $10,100 MX.','','','http://landrovergdl.com.mx/','IR AL SITIO','','','sitio',1),
	(11,'Suzuki','banner_suzuki_650x277.jpg','banner_suzuki_900x586.jpg','banner_suzuki_1600x900.jpg','SUZUKI','CIAZ 2016','CON UN BONO DE $5,000.','','','http://suzukigdl.com.mx/','IR AL SITIO','','','sitio',1);

/*!40000 ALTER TABLE `camBanners` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
