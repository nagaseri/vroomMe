var day = ''; 

module.exports = function (app) {

  app.get("/days", function (req, res) {
    console.log("You clicked on " + Object.keys(req.query)[0])
    day = Object.keys(req.query)[0];
  })

  app.get("/alltrips", function (req, res){
    db.trips.findAll({}).then(function(data){
      res.json(data);
    })
  })

  app.get("/allusers", function (req, res){
    db.users.findAll({}).then(function(data){
      res.json(data);
    })
  })

  //TODO: check route 
  // app.get("/SQLresults", function(req, res) {
  //   console.log('getting a get request to show all SQL results')
  //   db.trips.findAll({
  //     //TODO: check with front end
  //     driverDestiCity:  req.body.destination,
  //     driverOriginCity: req.body.origin,
  //     startTime: req.body.time
  //   }).then(function(vroomMe) {
  //     res.json(vroomMe);
  //   });
  // });

  // app.post("/api/create", function(req, res) {
  //   db.trips.create({
  //     //TODO: update item to put in driver Name
  //     driverName: req.body.driverName,
  //     driverOrigin: req.body.driverOrigin,
  //     driverOriginCity: req.body.driverOriginCity,
  //     driverDestination: req.body.driverDestination, 
  //     driverDestiCity: req.body.driverDestiCity, 
  //     startTime: startTime
  //   }).then(function(vroomMe) {
  //     res.redirect("/profile");
  //   });
  // });

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
  console.log('api-routes.js is loaded')
}