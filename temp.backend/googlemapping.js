var counter = 0; 

var driversArray =["1001 Potrero Ave, San Francisco, CA 94110","375 11th St, San Francisco, CA 94103","647 Valencia St, San Francisco, CA 94110","Lombard St, San Francisco, CA 94133","3140 Mission St, San Francisco, CA 94110","1293 E 1st Ave, Chico, CA 95926","664 E 1st Ave, Chico, CA 95926","5121 Eastham ct. Dublin, CA 94568"];

var latLngArray = [];
var distanceArray = [];
//TODO: create mock data for riderAddress
var riderAddress = '3286 22nd St, San Francisco, CA 94110';

var riderGeocoder = new google.maps.Geocoder();  

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete-2')),
      {types: ['geocode']});
}


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