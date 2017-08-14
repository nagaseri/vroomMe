
INSERT INTO trips (riderId, driverId, driverOrigin, driverOriginCity, driverDestination, driverDestiCity, startTime, price) 
VALUES 
 ((select id from users where userName = 'Chi Lu'),(select id from users where userName = 'Alex Ratliff'),'Coliseum, Oakland','Oakland','Ferry Building, San Francisco','San Francisco', '2017-08-04 15:00:00', 3),
 ((select id from users where userName = 'Chi Lu'),(select id from users where userName = 'Eri Nagase'),'Oracle Arena, Oakland','Oakland','Ferry Building, San Francisco','San Francisco', '2017-08-04 15:00:00',4),
 ((select id from users where userName = 'Eri Nagase'),(select id from users where userName = 'Alex Ratliff'),'Lake Merritt, Oakland','Oakland','Fisherman\'s Wharf, San Francisco','San Francisco', '2017-08-04 15:00:00',5),

 ((select id from users where userName = 'Chi Lu'),(select id from users where userName = 'Alex Ratliff'),'Pier 15','San Francisco','The Campanile','Berkeley', '2017-08-05 23:00:00',3),
 ((select id from users where userName = 'Anish Dabade'),(select id from users where userName = 'Eri Nagase'),'Pier 15','San Francisco','Coliseum BART station','Oakland', '2017-08-05 23:00:00',4),
 ((select id from users where userName = 'Eri Nagase'),(select id from users where userName = 'Alex Ratliff'),'Fisherman\'s Wharf','San Francisco','Coliseum BART station','Oakland', '2017-08-03 23:00:00',5),
 ((select id from users where userName = 'Chi Lu'),(select id from users where userName = 'Jay Leno'),'Pier 15, San Francisco','San Francisco','Cheeseboard Pizza, Berkeley','Berkeley', '2017-08-04 23:00:00',3),
 ((select id from users where userName = 'Anish Dabade'),(select id from users where userName = 'Jay Leno'),'Fisherman\'s Wharf','San Francisco','Coliseum BART station','Oakland', '2017-08-04 23:00:00',4),
 ((select id from users where userName = 'Alex Ratliff'),(select id from users where userName = 'Jay Leno'),'Lake Merritt, Oakland','Oakland','Fisherman\'s Wharf','San Francisco', '2017-08-04 22:00:00',5),
 ((select id from users where userName = 'Anish Dabade'),(select id from users where userName = 'Oprah Winfrey'),'Pier 15, San Francisco','San Francisco','Cheeseboard Pizza, Berkeley','Berkeley', '2017-08-04 22:00:00',3),
 ((select id from users where userName = 'Chi Lu'),(select id from users where userName = 'Oprah Winfrey'),'Fisherman\'s Wharf','San Francisco','Coliseum BART station','Oakland', '2017-08-04 22:00:00',4),
 ((select id from users where userName = 'Alex Ratliff'),(select id from users where userName = 'Oprah Winfrey'),'Lake Merritt, Oakland','Oakland','Pier 15, San Francisco','San Francisco', '2017-08-04 22:00:00',5);

--  ('Stanford University','Palo Alto','Mineta San Jose International Airport','San Jose', '2017-8-3 08:30:00'),
--  ('Stanford University','Palo Alto','Mineta San Jose International Airport','San Jose', '2017-8-3 08:30:00'),
--  ('Aquarius Theatre','Palo Alto','Winchester Mystery House','San Jose', '2017-8-3 08:30:00'),
--  ('Santa Clara Valley Medical Center','San Jose','Stanford University','Palo Alto', '2017-8-3 18:30:00'),
--  ('Winchester Mystery House','San Jose','Aquarius Theatre','Palo Alto', '2017-8-3 18:30:00'),
--  ('Mineta San Jose International Airport','San Jose','Aquarius Theatre','Palo Alto', '2017-8-3 18:30:00');
