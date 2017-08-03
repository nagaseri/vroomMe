// // require jquery"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
// var jquery = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
// // Variable for driver input of origin and destination locations
// var driverOrigin = "800 Madison St, Oakland, CA 94607";
// var driverDestination = "496 San Francisco Bay Trail, San Francisco, CA 94105";

// // Variable for driver input of starting and ending times of commute
// var driverStartTime;
// var driverEndTime;

// // Variable for rider input of origin and destination locations
// var riderOrigin = "1451 7th St, Oakland, CA 94607";
// var riderDestination = "101 Market St, San Francisco, CA 94105";

// // Variable for rider input of starting and ending times of commute
// var riderStartTime;
// var riderendTime;

// // Variables for the Google Maps API
// var cors = "https://cors-anywhere.herokuapp.com/";
// //DRIVER origin coordinates
// var coordLatDrvrOrg;
// var coordLngDrvrOrg;
// var coordinatesDrvrOrg;
// //RIDER origin coordinates
// var coordLatRiderOrg;
// var coordLngRiderOrg;
// var coordinatesRiderOrg;
// // DRIVER destination coordinates
// var coordLatDrvrDest;
// var coordLngDrvrDest;
// var coordinatesDrvrDest;
// // RIDER destination coordinates
// var coordLatRiderDest;
// var coordLngRiderDest;
// var coordinatesRiderDest;

// var queryURL;

// //initializing google Map variables
// var placeSearch, autocomplete;
// var componentForm = {
//   street_number: 'short_name',
//   route: 'long_name',
//   locality: 'long_name',
//   administrative_area_level_1: 'short_name',
//   country: 'long_name',
//   postal_code: 'short_name'
// };
// var endCoordLat = ""; 
// var endCoordLng = ""; 
// var startCoordLat = ""; 
// var startCoordLng = ""; 
// var directionsService;
// var directionsDisplay;
// var directionDisplay2; 


//     console.log("Driver origin: ", driverOrigin);
//     console.log("Driver destination: ", driverDestination); 
//     console.log("Rider origin: ", riderOrigin);
//     console.log("Rider destination: ", riderDestination); 
//     var cors = "https://cors-anywhere.herokuapp.com/"
//     var queryDriverURL = cors + "https://maps.googleapis.com/maps/api/directions/json?origin=" + driverOrigin + "&destination=" + driverDestination + "&key=AIzaSyA3zxPOYEjaZFkWhGi4WRjUVWXXXF7GRUA"
//       console.log(queryDriverURL); 

//     var queryRiderURL = cors + "https://maps.googleapis.com/maps/api/directions/json?origin=" + riderOrigin + "&destination=" + riderDestination + "&mode=transit&key=AIzaSyA3zxPOYEjaZFkWhGi4WRjUVWXXXF7GRUA"
//       console.log(queryDriverURL);
  
//   // Get the coordinates for driver
//   function getDriverTrip(drive) { 
//     $.ajax({
//         url: queryDriverURL,
//         method: "GET"       
//       })
//       .done(function(response) {
//         endCoordLat = response.routes[0].legs[0].end_location.lat;
//           console.log(endCoordLat); 
//         endCoordLng = response.routes[0].legs[0].end_location.lng;
//           console.log(endCoordLng); 
//         startCoordLat = response.routes[0].legs[0].start_location.lat;
//           console.log(startCoordLat); 
//         startCoordLng = response.routes[0].legs[0].start_location.lng;
//           console.log(startCoordLng);  
//       });
//       return drive();
//     };

//     // Get the coordinates for rider
//     function getRiderTrip() {
      
//       $.ajax({
//         url: queryDriverURL,
//         method: "GET"       
//       })
//       .done(function(response) {
//         endCoordLat = response.routes[0].legs[0].end_location.lat;
//           console.log(endCoordLat); 
//         endCoordLng = response.routes[0].legs[0].end_location.lng;
//           console.log(endCoordLng); 
//         startCoordLat = response.routes[0].legs[0].start_location.lat;
//           console.log(startCoordLat); 
//         startCoordLng = response.routes[0].legs[0].start_location.lng;
//           console.log(startCoordLng);
//       });
//     };

//     getDriverTrip();
//     getRiderTrip();

var counter = 0; 

var driversArray =["1001 Potrero Ave, San Francisco, CA 94110","375 11th St, San Francisco, CA 94103","647 Valencia St, San Francisco, CA 94110","Lombard St, San Francisco, CA 94133","3140 Mission St, San Francisco, CA 94110","1293 E 1st Ave, Chico, CA 95926","664 E 1st Ave, Chico, CA 95926","5121 Eastham ct. Dublin, CA 94568"];

var latLngArray = [];
var distanceArray = [];
//TODO: create mock data for riderAddress
var riderAddress = '3286 22nd St, San Francisco, CA 94110';

var riderGeocoder = new google.maps.Geocoder();  


//distance helper function 
function calcDistance(p1, p2) {
 return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

//recursive geocoder function 
var recursiveGeocoder = function(driverObj, riderObj){
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': driverObj}, function(results, status){
    counter++; 
    if (status == google.maps.GeocoderStatus.OK){
      console.log(results[0]);
      var add = results[0].address_components.length;
      console.log(add);
        for(let i=0; i<results[0].address_components.length; i++) {
          if(results[0].address_components[i].types[0] == "locality") {
            console.log(results[0].address_components[i].long_name);
          }
        }
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      latLngArray.push({'lat': lat, 'lng': lng})
    }
    //recursive case
    if (counter < driversArray.length){
      recursiveGeocoder(driversArray[counter], riderObj)
    }
    //base case (all driver objects have been geocoded)
    else {
      //calculate distances for each driver origin
      for (var i = 0; i< driversArray.length; i++){
        var driverPoint = new google.maps.LatLng(latLngArray[i].lat, latLngArray[i].lng);
        distanceArray[i] = calcDistance(riderObj, driverPoint);

        //now you have all the distances stored in distance Array, do a filter where distance[i] < 2 miles
        //TODO: create code to filter

        if(distanceArray[i] < 3.00) {
          console.log("Driver: " + i + " is " + distanceArray[i] + " miles away...!!!");
        } 
        
      }
      
    
    }
  })
}

//async call of recursive function
riderGeocoder.geocode({'address': riderAddress}, function(results, status){
  var riderLat = results[0].geometry.location.lat();
  var riderLng = results[0].geometry.location.lng()
  riderPoint = new google.maps.LatLng(riderLat, riderLng);
  //recursive calls to populate latLngArray;  
  recursiveGeocoder(driversArray[counter], riderPoint);
})