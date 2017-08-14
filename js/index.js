function getWeather(lat, lon) {
  console.log("getWeather");

  var url = "https://fcc-weather-api.glitch.me/api/current?" + "lat=" + lat + "&lon=" + lon;
  $.getJSON(url, function(json) {
    $(".weather").text(json.weather[0].main + " " + json.weather[0].description);
  });
}

$(document).ready(function() {
  console.log("ready");
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude);  
  });
});