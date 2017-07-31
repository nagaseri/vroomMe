var express = require("express");

var router = express.Router();


router.get("/", function (req, res) {
  // var d = new Date();
  console.log('rendering index page')  
  var daysOfWeek = {
    days:[
      {day:"M", rowOne: true},
      {day:"Tu", rowOne: true},
      {day:"W", rowOne: true},
      {day:"Th", rowOne: false},
      {day:"F", rowOne: false},
    ]}; 
  res.render("index", daysOfWeek);
});

router.get("/query", function (req, res) {
  console.log("You clicked on " + Object.keys(req.query)[0])
  var  hbsObject = {
    rides: [{
      rider: 'Chi',
      origin: 'oakland',
      destination: 'san francisco'
    }]
  };
  // console.log(hbsObject);
  // res.render("query", hbsObject);
});

module.exports = router; 

router.post("/new/ride", function (req, res) {
  //TODO: add logic to add new ride request
  res.redirect("/results");
});

router.post("/new/drive", function (req, res) {
  //TODO: add logic to add new drive service
  res.redirect("/results");
});

module.exports = router;