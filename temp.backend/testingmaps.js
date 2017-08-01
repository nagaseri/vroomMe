// require jquery"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
var jquery = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
// Variable for driver input of origin and destination locations
var driverOrigin = "800 Madison St, Oakland, CA 94607";
var driverDestination = "496 San Francisco Bay Trail, San Francisco, CA 94105";

// Variable for driver input of starting and ending times of commute
var driverStartTime;
var driverEndTime;

// Variable for rider input of origin and destination locations
var riderOrigin = "1451 7th St, Oakland, CA 94607";
var riderDestination = "101 Market St, San Francisco, CA 94105";

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
var coordLatRiderOrg;
var coordLngRiderOrg;
var coordinatesRiderOrg;
// DRIVER destination coordinates
var coordLatDrvrDest;
var coordLngDrvrDest;
var coordinatesDrvrDest;
// RIDER destination coordinates
var coordLatRiderDest;
var coordLngRiderDest;
var coordinatesRiderDest;

var queryURL;

//initializing google Map variables
var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};
var endCoordLat = ""; 
var endCoordLng = ""; 
var startCoordLat = ""; 
var startCoordLng = ""; 
var directionsService;
var directionsDisplay;
var directionDisplay2; 


    console.log("Driver origin: ", driverOrigin);
    console.log("Driver destination: ", driverDestination); 
    console.log("Rider origin: ", riderOrigin);
    console.log("Rider destination: ", riderDestination); 
    var cors = "https://cors-anywhere.herokuapp.com/"
    var queryDriverURL = cors + "https://maps.googleapis.com/maps/api/directions/json?origin=" + driverOrigin + "&destination=" + driverDestination + "&key=AIzaSyA3zxPOYEjaZFkWhGi4WRjUVWXXXF7GRUA"
      console.log(queryDriverURL); 

    var queryRiderURL = cors + "https://maps.googleapis.com/maps/api/directions/json?origin=" + riderOrigin + "&destination=" + riderDestination + "&mode=transit&key=AIzaSyA3zxPOYEjaZFkWhGi4WRjUVWXXXF7GRUA"
      console.log(queryDriverURL);
  
  // Get the coordinates for driver
  function getDriverTrip(drive) { 
    $.ajax({
        url: queryDriverURL,
        method: "GET"       
      })
      .done(function(response) {
        endCoordLat = response.routes[0].legs[0].end_location.lat;
          console.log(endCoordLat); 
        endCoordLng = response.routes[0].legs[0].end_location.lng;
          console.log(endCoordLng); 
        startCoordLat = response.routes[0].legs[0].start_location.lat;
          console.log(startCoordLat); 
        startCoordLng = response.routes[0].legs[0].start_location.lng;
          console.log(startCoordLng);  
      });
      return drive();
    };

    // Get the coordinates for rider
    function getRiderTrip() {
      
      $.ajax({
        url: queryDriverURL,
        method: "GET"       
      })
      .done(function(response) {
        endCoordLat = response.routes[0].legs[0].end_location.lat;
          console.log(endCoordLat); 
        endCoordLng = response.routes[0].legs[0].end_location.lng;
          console.log(endCoordLng); 
        startCoordLat = response.routes[0].legs[0].start_location.lat;
          console.log(startCoordLat); 
        startCoordLng = response.routes[0].legs[0].start_location.lng;
          console.log(startCoordLng);
      });
    };

    getDriverTrip();
    getRiderTrip();