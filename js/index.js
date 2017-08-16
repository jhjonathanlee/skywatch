var temp_f, temp_c;
var isC;

function getWeather(lat, lon) {
  var key = "1cf17322174e4235bdb35356171608";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=" + lat + "," + lon;

  $.getJSON(url, function(json) {
    console.log(json);
    var current = json.current;
    $(".weather").text(current.condition.text);
    $(".icon").attr("src", current.condition.icon);

    temp_f = current.temp_f;
    temp_c = current.temp_c;

    var showTemp = isC ? temp_c : temp_f;

    $(".temp").text(showTemp);
    var loc = json.location;
    $(".location").text(loc.name + ", " + loc.region + ", "  + loc.country);
  });
}

$(document).ready(function() {
  isC = true;
  temp_f = "-";
  temp_c = "-";

  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude, position.coords.longitude);  
  });

  $(".temp_c").click(function() {
    isC = true;
    $(".temp").text(temp_c);
    $(".temp_units").html("C");
  });

  $(".temp_f").click(function() {
    isC = false;
    $(".temp").text(temp_f);
    $(".temp-units").html("F");
  });
});