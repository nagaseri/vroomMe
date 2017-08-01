DROP DATABASE if exists vroomme_db;
CREATE DATABASE vroomme_db;

USE vroomme_db;

CREATE TABLE users (
  id INT auto_increment,
  userName varchar (255) NOT NULL,
  carModel varchar (255) DEFAULT null,  
  PRIMARY KEY (id)
);

CREATE TABLE trips (
  id INT auto_increment,
  driverId  int DEFAULT 0;
  hasRider BOOLEAN,
  riderId int DEFAULT 0,
  driverOrigin varchar (255) NOT NULL,
  driverOriginCity varchar (255) NOT NULL,
  driverDestination varchar (255) NOT NULL,
  driverDestiCity varchar (255) NOT NULL,
  startTime DATETIME,
  PRIMARY KEY (id),
  FOREIGN KEY (driverId)
    REFERENCES users(id),
  FOREIGN KEY (riderId)
    REFERENCES users(id)
    ON UPDATE CASCADE
);

SELECT * FROM users;
SELECT * FROM TRIPS;


