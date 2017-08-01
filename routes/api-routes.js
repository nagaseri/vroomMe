module.exports = function (app) {
  //TODO: check route 
  app.get("/", function(req, res) {
    db.trips.findAll({
      //TODO: check with front end
      driverDestiCity:  req.body.destination,
      driverOriginCity: req.body.origin,
      startTime: req.body.time
    }).then(function(vroomMe) {
      res.json(vroomMe);
    });
  });

  app.post("/api/create", function(req, res) {
    db.trips.create({
      //TODO: update item to put in driver Name
      driverName: req.body.driverName,
      driverOrigin: req.body.driverOrigin,
      driverOriginCity: req.body.driverOriginCity,
      driverDestination: req.body.driverDestination, 
      driverDestiCity: req.body.driverDestiCity, 
      startTime: startTime
    }).then(function(vroomMe) {
      res.redirect("/profile");
    });
  });

  // app.delete("/api/vroomMe/:id", function(req, res) {
  //   db.vroomMe.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(vroomMe) {
  //     res.json(vroomMe);
  //   });

  // });

  // app.put("/api/vroomMe", function(req, res) {
  //   db.vroomMe.update({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(vroomMe) {
  //     res.json(vroomMe);
  //   });
  // });  

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }))
}