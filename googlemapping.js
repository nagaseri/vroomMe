// Variable for driver input of origin and destination locations
var driverOrigin;
var driverDestination;

// Variable for driver input of starting and ending times of commute
var driverStartTime;
var driverEndTime;

// Variable for rider input of origin and destination locations
var riderOrigin;
var riderDestination;

// Variable for rider input of starting and ending times of commute
var riderStartTime;
var riderendTime;

// Variables for the Google Maps API
var cors = "https://cors-anywhere.herokuapp.com/";
//DRIVER origin coordinates
var coordLatDrvrOrg;
var coordLngDrvrOrg;
var coordinatesDrvrOrg;
//RIDER origin coordinates
var coordRoLatRiderOrg;
var coordRoLngRiderOrg;
var coordinatesRiderOrg;
// DRIVER destination coordinates
var coordDdLatDrvrDest;
var coordDdLngDrvrDest;
var coordinatesDrvrDest;
// RIDER destination coordinates
var coordRdLatRiderDest;
var coordRdLngRiderDest;
var coordinatesRiderDest;

var queryURL;

// Get the coordinates for origin

function getOrigin(address) {
  $.ajax({
    async: false,
    url: cors + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + driverOrigin + "&key=AIzaSyDPEkigjm2_zBLC8qVTcHkuHtFZNjSY3Zk",
    method: "GET"
  }).done(function(response){
  //convert geo location address to coordinates
    coordLatDrvrOrg = response.results[0].geometry.location.lat;
    coordLngDrvrOrg = response.results[0].geometry.location.lng;
    coordinatesDrvrOrg = coordLatDrvrOrg + "," + coordLngDrvrOrg;
    console.log("Starting Driver Coordinates: ", coordinatesDrvrOrg)
    queryURL = cors + "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coordinatesDrvrOrg + "&key=AIzaSyDPEkigjm2_zBLC8qVTcHkuHtFZNjSY3Zk";
    console.log("Query: ",queryURL);
    }); 
};

// Get the coordinates for destination
function getDestination(address) {
  $.ajax({
    async: false,
    url: cors + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + driverDestination + "&key=AIzaSyDPEkigjm2_zBLC8qVTcHkuHtFZNjSY3Zk",
    method: "GET"
  }).done(function(response){
  //convert geo location address to coordinates
    coordDdLatDrvrDest = response.results[0].geometry.location.lat;
    coordDdLngDrvrDest = response.results[0].geometry.location.lng;
    coordinatesDrvrDest = coordDdLatDrvrDest + "," + coordDdLngDrvrDest;
    console.log("Coordinates of Driver Destination: ",coordinatesDrvrDest)
    queryURL = cors + "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coordinatesDrvrDest + "&key=AIzaSyDPEkigjm2_zBLC8qVTcHkuHtFZNjSY3Zk";
    console.log("Query: ",queryURL);
    }); 
};