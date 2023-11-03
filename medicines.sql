-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2023 at 07:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drughouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `Id` int(11) NOT NULL,
  `molecularFomula` text DEFAULT NULL,
  `IUPAC_Name` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Mechanism` text DEFAULT NULL,
  `Uses` text DEFAULT NULL,
  `adverse_Effect` text DEFAULT NULL,
  `strucutural_Formula_URL` text DEFAULT NULL,
  `Category` text DEFAULT NULL,
  `drugName` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`Id`, `molecularFomula`, `IUPAC_Name`, `Description`, `Mechanism`, `Uses`, `adverse_Effect`, `strucutural_Formula_URL`, `Category`, `drugName`) VALUES
(1, 'potter', 'potter', 'potter', 'potter', 'potter', 'potter', 'https://www.shutterstock.com/image-vector/skeletal-formula-dactinomycin-cancer-chemotherapy-260nw-2176733499.jpg', 'potter', 'Potter'),
(2, 'admin', 'admin', 'admin', 'admin', 'admin', 'admin', 'https://c8.alamy.com/comp/2DCAGBF/skeletal-formula-of-ketamine-drug-chemical-molecule-2DCAGBF.jpg', 'admin', 'Admin'),
(3, 'Harry', NULL, 'Harry', NULL, 'Harry', NULL, 'Harry', 'Harry', 'Harry');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
