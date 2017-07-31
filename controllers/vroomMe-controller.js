var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
  // var d = new Date();
  console.log('rendering index page')  
  var daysOfWeek = {
    days:[
      {day:"M"},
      {day:"Tu"},
      {day:"W"},
      {day:"Th"},
      {day:"F"},
    ]}; 
  res.render("index", daysOfWeek);
});

router.get("/rides", function (req, res) {
  var  hbsObject = {
    rides: [{
      rider: 'Chi',
      origin: 'oakland',
      destination: 'san francisco'
    }]
  };
  console.log(hbsObject);
  res.render("drive", hbsObject);
});

module.exports = router; 

router.get("/drives", function (req, res) {
  var  hbsObject = {
    rides: [{
      rider: 'eri',
      origin: 'oakland',
      destination: 'san francisco'
    }]
  };
  console.log(hbsObject);
  res.render("ride", hbsObject);
});

router.post("/new/ride", function (req, res) {
  //TODO: add logic to add new ride request
  res.redirect("/results");
});

router.post("/new/drive", function (req, res) {
  //TODO: add logic to add new drive service
  res.redirect("/results");
});

module.exports = router;