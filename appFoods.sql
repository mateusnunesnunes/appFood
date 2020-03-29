-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Tempo de geração: 29/03/2020 às 12:25
-- Versão do servidor: 5.7.26
-- Versão do PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Banco de dados: `appFoods`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `Users`
--

CREATE TABLE `Users` (
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `idade` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Users`
--

INSERT INTO `Users` (`nome`, `email`, `idade`) VALUES
('Hoyt Harmon', 'vitae.erat@fermentumvelmauris.edu', 46),
('Hoyt Harmon', 'vitae.erat@fermentumvelmauris.edu', 46),
('Hasad Cantrell', 'cursus@mifelisadipiscing.org', 80),
('Zenia Patrick', 'sodales.Mauris.blandit@mauris.edu', 26),
('Gillian Townsend', 'et.lacinia.vitae@veliteu.net', 8),
('Wendy Garrison', 'vitae.erat.Vivamus@pedeac.org', 2),
('Bryar Huffman', 'et.rutrum.eu@Phasellus.net', 25),
('Maris Fitzgerald', 'lacus@acarcuNunc.co.uk', 13),
('Britanni England', 'erat.Sed@Sedmalesuadaaugue.net', 15),
('Harriet Parrish', 'malesuada@ornareInfaucibus.net', 15),
('Destiny Jarvis', 'vehicula@Donec.com', 3),
('Martha England', 'ut@ligulatortor.edu', 16),
('Fleur Elliott', 'diam.lorem.auctor@augueeutempor.co.uk', 4),
('Maxine Mendez', 'sapien.cursus@erat.edu', 15),
('Kylynn Vargas', 'Donec.non.justo@portaelita.net', 7),
('Hollee Edwards', 'orci@estMauriseu.net', 7),
('Rhea Kennedy', 'mollis.lectus.pede@fermentummetusAenean.com', 11),
('Dorothy Blevins', 'lacus@vitaealiquam.ca', 2),
('Raven Ball', 'turpis.vitae.purus@arcuAliquam.com', 18),
('Phyllis Pace', 'Maecenas.libero@eleifendnunc.co.uk', 18),
('Cecilia Barber', 'Quisque.fringilla@luctusaliquetodio.edu', 29),
('Tamara Arnold', 'non@urnaconvalliserat.co.uk', 11),
('Josephine Ramsey', 'scelerisque.dui.Suspendisse@In.co.uk', 30),
('Cheryl Clark', 'Suspendisse.commodo@turpisAliquam.co.uk', 8),
('Odessa Boyd', 'adipiscing.lacus@eu.net', 4),
('Odette Blankenship', 'sed.leo.Cras@cursuspurus.org', 10),
('Constance Garcia', 'per@Donec.ca', 3),
('Doris Bowers', 'ipsum@velit.ca', 27),
('May Lee', 'augue.id@imperdieteratnonummy.net', 14),
('Gemma Hensley', 'ante.iaculis.nec@risusDonecegestas.ca', 6),
('Constance Hurley', 'quis.diam.Pellentesque@mattisvelitjusto.ca', 6),
('Cally Whitney', 'gravida@Maurisvestibulumneque.org', 20),
('Xaviera Callahan', 'nec.tempus.scelerisque@Aliquamadipiscing.edu', 26),
('Octavia Horne', 'Fusce.aliquet.magna@Phasellusataugue.ca', 13),
('Delilah Pittman', 'nunc.sed.libero@tincidunt.org', 28),
('Nora Hahn', 'sed@velesttempor.co.uk', 9),
('Blossom Cannon', 'eu.eleifend.nec@eratinconsectetuer.ca', 28),
('Irene Cervantes', 'et.ultrices.posuere@tellusSuspendissesed.edu', 24),
('Cheyenne Pace', 'In.lorem.Donec@Morbi.co.uk', 15),
('Jada Stephenson', 'Duis@mauriserateget.ca', 14),
('Zenia Contreras', 'ut@euligulaAenean.com', 9),
('Mara Shaffer', 'et.magnis@semperpretium.ca', 11),
('Clementine Rogers', 'morbi@urnaet.edu', 3),
('Aiko Maldonado', 'sodales.at.velit@Nullamfeugiat.edu', 5),
('Cecilia Holcomb', 'elit@dolorsit.ca', 25),
('Alexis Robles', 'id.mollis.nec@inconsequatenim.ca', 27),
('Danielle Carroll', 'ligula@amet.co.uk', 19),
('Janna Lynn', 'dui.nec@anteipsumprimis.ca', 14),
('Wilma Fry', 'at.augue@feugiat.net', 6),
('Xena Soto', 'eleifend.Cras.sed@Proinvelarcu.co.uk', 14),
('Hope Hodges', 'dui@ipsumdolorsit.org', 15),
('Angela Parrish', 'nisi.a@loremipsum.org', 10),
('Leilani Mejia', 'Mauris.nulla@imperdiet.ca', 12),
('Zenia Patrick', 'sodales.Mauris.blandit@mauris.edu', 26),
('Zenia Patrick', 'sodales.Mauris.blandit@mauris.edu', 26),
('Gillian Townsend', 'et.lacinia.vitae@veliteu.net', 8),
('Wendy Garrison', 'vitae.erat.Vivamus@pedeac.org', 2),
('Bryar Huffman', 'et.rutrum.eu@Phasellus.net', 25),
('Maris Fitzgerald', 'lacus@acarcuNunc.co.uk', 13),
('Britanni England', 'erat.Sed@Sedmalesuadaaugue.net', 15),
('Harriet Parrish', 'malesuada@ornareInfaucibus.net', 15),
('Destiny Jarvis', 'vehicula@Donec.com', 3),
('Martha England', 'ut@ligulatortor.edu', 16),
('Fleur Elliott', 'diam.lorem.auctor@augueeutempor.co.uk', 4),
('Maxine Mendez', 'sapien.cursus@erat.edu', 15),
('Kylynn Vargas', 'Donec.non.justo@portaelita.net', 7),
('Hollee Edwards', 'orci@estMauriseu.net', 7),
('Rhea Kennedy', 'mollis.lectus.pede@fermentummetusAenean.com', 11),
('Dorothy Blevins', 'lacus@vitaealiquam.ca', 2),
('Raven Ball', 'turpis.vitae.purus@arcuAliquam.com', 18),
('Phyllis Pace', 'Maecenas.libero@eleifendnunc.co.uk', 18),
('Cecilia Barber', 'Quisque.fringilla@luctusaliquetodio.edu', 29),
('Tamara Arnold', 'non@urnaconvalliserat.co.uk', 11),
('Josephine Ramsey', 'scelerisque.dui.Suspendisse@In.co.uk', 30),
('Cheryl Clark', 'Suspendisse.commodo@turpisAliquam.co.uk', 8),
('Odessa Boyd', 'adipiscing.lacus@eu.net', 4),
('Odette Blankenship', 'sed.leo.Cras@cursuspurus.org', 10),
('Constance Garcia', 'per@Donec.ca', 3),
('Doris Bowers', 'ipsum@velit.ca', 27),
('May Lee', 'augue.id@imperdieteratnonummy.net', 14),
('Gemma Hensley', 'ante.iaculis.nec@risusDonecegestas.ca', 6),
('Constance Hurley', 'quis.diam.Pellentesque@mattisvelitjusto.ca', 6),
('Cally Whitney', 'gravida@Maurisvestibulumneque.org', 20),
('Zenia Patrick', 'sodales.Mauris.blandit@mauris.edu', 26),
('Gillian Townsend', 'et.lacinia.vitae@veliteu.net', 8),
('Wendy Garrison', 'vitae.erat.Vivamus@pedeac.org', 2),
('Mari Johns', 'mauris.sagittis@purusgravidasagittis.edu', 27),
('Deborah Hines', 'dolor.elit@convallisest.com', 22),
('Margaret Beck', 'Maecenas.ornare@dapibus.org', 10),
('Molly Foreman', 'pede.Cum@nequevitae.co.uk', 12),
('Eaton Leach', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Eaton Leach', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('Dalhe', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('mateus', 'email', 19),
('mateus', 'email', 19),
('mateus', 'mateusemail', 19),
('mateidra', 'nuneidra', 19),
('goro', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('goro2', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('deidra', 'Vivamus.molestie@penatibusetmagnis.org', 9),
('unitario', 'emial', 19),
('unitario', 'emial', 19),
('unitario', 'emial', 19),
('unitario', 'emial', 19),
('unitario', 'emial', 19),
('unitario', 'emial', 19),
('unitario', 'emial', 19),
('fortunato', 'emial', 19);
