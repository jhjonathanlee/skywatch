function getWeather() {
  console.log("getWeather");
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=42&lon=83";
  $.getJSON(url, function(json) {
    $(".weather").text(json.weather[0].main + " " + json.weather[0].description);
  });
}

$(document).ready(function() {
  console.log("ready");
  getWeather();
});