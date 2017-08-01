CREATE DATABASE vroomme_db;

USE vroomme_db;

CREATE TABLE `trips` (
    driverName varchar(255) NOT NULL,
    hasRider BOOLEAN,
    driverOrigin varchar (255) NOT NULL,
    driverOriginCity varchar (255) NOT NULL,
    driverDestination varchar (255) NOT NULL,
    driverDestiCity varchar (255) NOT NULL,
    startTime INTEGER(10),
    PRIMARY KEY (id)
);

CREATE TABLE `user` (
    userName varchar (255) NOT NULL,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    carModel varchar (255),  
    PRIMARY KEY (id)
);

