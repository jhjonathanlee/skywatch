function getWeather(lat, lon) {
  var key = "1cf17322174e4235bdb35356171608";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + lat + "," + lon;

  $.getJSON(url, function(json) {
    console.log(json);
    var current = json.current;
    $(".weather").text(current.condition.text);
    $(".icon").attr("src", current.condition.icon);
    $(".temp").html(current.temp_c + "&deg;C");
  });
}

$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude);  
  });
});