INSERT INTO trips (riderId, driverId, driverOrigin, driverOriginCity, driverDestination, driverDestiCity, startTime) 
VALUES 
 ((select id from users where userName = 'Chi Lu'),(select id from users where userName = 'Alex Ratliff'),'Coliseum','Oakland','Ferry Building','San Francisco', '2017-8-4 08:00:00'),
 ((select id from users where userName = 'Anish Dabade'),(select id from users where userName = 'Eri Nagase'),'Downtown Berkeley BART station','Berkeley','Ferry Building','San Francisco', '2017-8-4 08:00:00'),
 ((select id from users where userName = 'Eri Nagase'),(select id from users where userName = 'Alex Ratliff'),'Downtown Berkeley BART station','Berkeley','Fisherman\'s Wharf','San Francisco', '2017-8-3 08:00:00'),

 ((select id from users where userName = 'Chi Lu'),(select id from users where userName = 'Alex Ratliff'),'Pier 15','San Francisco','The Campanile','Berkeley', '2017-8-4 18:00:00'),
 ((select id from users where userName = 'Anish Dabade'),(select id from users where userName = 'Eri Nagase'),'Pier 15','San Francisco','Coliseum BART station','Oakland', '2017-8-4 18:00:00'),
 ((select id from users where userName = 'Eri Nagase'),(select id from users where userName = 'Alex Ratliff'),'Fisherman\'s Wharf','San Francisco','Coliseum BART station','Oakland', '2017-8-3 18:00:00');


--  ('Stanford University','Palo Alto','Mineta San Jose International Airport','San Jose', '2017-8-3 08:30:00'),
--  ('Stanford University','Palo Alto','Mineta San Jose International Airport','San Jose', '2017-8-3 08:30:00'),
--  ('Aquarius Theatre','Palo Alto','Winchester Mystery House','San Jose', '2017-8-3 08:30:00'),
--  ('Santa Clara Valley Medical Center','San Jose','Stanford University','Palo Alto', '2017-8-3 18:30:00'),
--  ('Winchester Mystery House','San Jose','Aquarius Theatre','Palo Alto', '2017-8-3 18:30:00'),
--  ('Mineta San Jose International Airport','San Jose','Aquarius Theatre','Palo Alto', '2017-8-3 18:30:00');
