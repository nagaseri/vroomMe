CREATE DATABASE vroomme_db;

USE vroomme_db;

CREATE TABLE vroome(
    driverName VARCHAR(100),
    hasRider BOOLEAN DEFAULT FALSE,
    driverOrigin VARCHAR(255),
    driverOriginCity VARCHAR(255),
    driverDestination VARCHAR(255),
    driverDestiCity VARCHAR(255),
    startTime INT(20),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);