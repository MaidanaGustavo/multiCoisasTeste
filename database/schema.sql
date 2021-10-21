
SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

USE `MultiCoisas`;

DROP TABLE IF EXISTS `Categoria`;
CREATE TABLE `Categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) DEFAULT NULL,
  `nome` varchar(128) DEFAULT NULL,
  `dataDeCriacao` datetime DEFAULT NULL,
  `dataDeModificacao` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Categoria` (`id`, `codigo`, `nome`, `dataDeCriacao`, `dataDeModificacao`) VALUES
(1,	1,	'Utilidades',	'2021-10-20 22:21:05',	'2021-10-20 22:22:39');

DROP TABLE IF EXISTS `Cliente`;
CREATE TABLE `Cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) DEFAULT NULL,
  `nome` varchar(128) NOT NULL,
  `dataDeNascimento` date NOT NULL,
  `email` varchar(32) DEFAULT NULL,
  `dataDeCriacao` datetime DEFAULT NULL,
  `dataDeModificacao` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Cliente` (`id`, `codigo`, `nome`, `dataDeNascimento`, `email`, `dataDeCriacao`, `dataDeModificacao`) VALUES
(1,	1,	'Carlos',	'2000-12-08',	'gustavomaidana08@hotmail.com',	'2021-10-20 23:28:39',	'2021-10-20 23:37:56'),
(2,	2,	'Joao',	'1999-12-08',	'gustavomaidana08@hotmail.com',	'2021-10-20 23:34:22',	'2021-10-20 23:34:22');

DROP TABLE IF EXISTS `Estoque`;
CREATE TABLE `Estoque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `produtoId` int(11) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `preco` decimal(15,2) DEFAULT NULL,
  `dataDeCriacao` datetime DEFAULT NULL,
  `dataDeModificacao` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `produtoId` (`produtoId`),
  CONSTRAINT `Estoque_ibfk_1` FOREIGN KEY (`produtoId`) REFERENCES `Produto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Estoque` (`id`, `produtoId`, `quantidade`, `preco`, `dataDeCriacao`, `dataDeModificacao`) VALUES
(1,	2,	25,	2.90,	'2021-10-20 15:44:57',	'2021-10-20 15:48:49'),
(2,	2,	25,	2.95,	'2021-10-20 22:29:12',	'2021-10-20 22:29:12');

DROP TABLE IF EXISTS `Produto`;
CREATE TABLE `Produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) DEFAULT NULL,
  `nome` varchar(128) DEFAULT NULL,
  `dataDeCriacao` datetime DEFAULT NULL,
  `dataDeModificacao` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Produto` (`id`, `codigo`, `nome`, `dataDeCriacao`, `dataDeModificacao`) VALUES
(2,	3,	'Colher',	'2021-10-20 15:27:46',	'2021-10-20 15:29:00'),
(3,	2,	NULL,	'2021-10-20 22:44:16',	'2021-10-20 22:44:16');

DROP TABLE IF EXISTS `Venda`;
CREATE TABLE `Venda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) DEFAULT NULL,
  `valor` varchar(128) DEFAULT NULL,
  `dataDeVenda` date DEFAULT NULL,
  `clienteId` int(11) DEFAULT NULL,
  `dataDeCriacao` datetime DEFAULT NULL,
  `dataDeModificacao` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clienteId` (`clienteId`),
  CONSTRAINT `Venda_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `Cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Venda` (`id`, `codigo`, `valor`, `dataDeVenda`, `clienteId`, `dataDeCriacao`, `dataDeModificacao`) VALUES
(1,	1,	'275',	'2021-10-20',	1,	'2021-10-21 03:00:08',	'2021-10-21 03:02:38'),
(2,	1,	'250',	'2021-10-20',	1,	'2021-10-21 03:01:23',	'2021-10-21 03:01:23');

-- 2021-10-21 03:04:35