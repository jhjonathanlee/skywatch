function getWeather(lat, lon) {
  var url = "https://fcc-weather-api.glitch.me/api/current?" + "lat=" + lat + "&lon=" + lon;
  $.getJSON(url, function(json) {
    console.log(json);
    var weather = json.weather[0];
    $(".weather").text(weather.main);
    $(".icon").attr("src", weather.icon);
    $(".temp").html(json.main.temp + "&deg;C");
  });
}

$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude);  
  });
});