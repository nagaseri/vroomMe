DROP DATABASE if exists vroomme_db;
CREATE DATABASE vroomme_db;

USE vroomme_db;

CREATE TABLE users (
  id INT auto_increment,
  userName varchar (255) unique NOT NULL,
  carModel varchar (255) DEFAULT null,  
  createdAt timestamp DEFAULT current_timestamp,
  updatedAt timestamp DEFAULT current_timestamp,
  PRIMARY KEY (id)
);

CREATE TABLE trips (
  id INT auto_increment,
  driverId  int DEFAULT 0,
  hasRider BOOLEAN DEFAULT false,
  riderId int DEFAULT 0,
  driverOrigin varchar (255) NOT NULL,
  driverOriginCity varchar (255) NOT NULL,
  driverDestination varchar (255) NOT NULL,
  driverDestiCity varchar (255) NOT NULL,
  startTime DATETIME,
  price Int(11) DEFAULT 0,
  createdAt timestamp DEFAULT current_timestamp,
  updatedAt timestamp DEFAULT current_timestamp,
  PRIMARY KEY (id),
  FOREIGN KEY (driverId)
    REFERENCES users(id)
  
);trips

SET time_zone='-07:00';


INSERT INTO users (userName, carModel) VALUES ('Alex Ratliff', '2004 Honda Accord');
INSERT INTO users (userName, carModel) VALUES ('Chi Lu', '');
INSERT INTO users (userName, carModel) VALUES ('Anish Dabade', '');
INSERT INTO users (userName, carModel) VALUES ('Eri Nagase', '2015 Fiat 500');
INSERT INTO users (userName, carModel) VALUES ('Jay Leno', '1969 Lamborghini Miura');
INSERT INTO users (userName, carModel) VALUES ('Oprah Winfrey', '2016 Tesla Model S');


SELECT * FROM users;
SELECT * FROM trips;

