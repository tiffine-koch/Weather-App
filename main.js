
'use strict';
$(document).ready(init);
//use this for zip code

var $city = ('#city');
var $state = ('#state');
var $temp = ('#temp');
var $zip = ('#zipCode');
var $forecast1 = ('#forecast1');
var $forecast2 = ('#forecast2');
var $forecast3 = ('#forecast3');

function init() {
$.ajax({
    url:"http://api.wunderground.com/api/fa798b8605df3bb3/geolookup/q/autoip.json",
    type: "GET",
    // contentType:"jsonp",
    success: function(data) {
      console.log(data);
      var $city =  $('<p>').text(data.location.city);
      var $state = $('<p>').text(data.location.state);
    	console.log($city);
    	console.log($state);
    	$('.city').append($city);
    	$('.state').append($state);
  	},
  });
  }
function getConditions() {
$.ajax({
     url:"http://api.wunderground.com/api/fa798b8605df3bb3/conditions/q/CA/San_Francisco.json",
    type: "GET",
    // contentType:"jsonp",
    success: function(data) {
      console.log(data);
      var $temp_f =  $('<li>').text(data.current_observation.temp_f);
    	console.log($temp_f);
    	$('#temp').append($temp_f);
  	},
  });
  }

function getZip() {
  $.ajax({
     url:"http://api.wunderground.com/api/fa798b8605df3bb3/geolookup/q/94107.json",
    type: "GET",
    // contentType:"jsonp",
    success: function(data) {
      console.log(data);
      var $zip =  $('<li>').text(data.location.zip);
    	console.log($zip);
    	$('#zipCode').append($zip);
  	}
  });
}
getZip();


function getForecast() {
  $.ajax({
     url:"http://api.wunderground.com/api/fa798b8605df3bb3/forecast/q/94107.json",
    type: "GET",
    // contentType:"jsonp",
    success: function(data) {
      console.log(data)

      var $highDay1 = $('<li>').text(data.forecast.simpleforecast.forecastday[0].high.fahrenheit);
      var $highDay2 = $('<li>').text(data.forecast.simpleforecast.forecastday[1].high.fahrenheit);
      var $highDay3 = $('<li>').text(data.forecast.simpleforecast.forecastday[2].high.fahrenheit);

      var $tempDay1 = $('<li>').text(data.forecast.simpleforecast.forecastday[0].low.fahrenheit);
      var $lowDay2 = $('<li>').text(data.forecast.simpleforecast.forecastday[1].low.fahrenheit);
      var $lowDay3 = $('<li>').text(data.forecast.simpleforecast.forecastday[2].low.fahrenheit);

      var $conditionsDay1 = $('<li>').text(data.forecast.simpleforecast.forecastday[0].conditions);
      var $conditionsDay2 = $('<li>').text(data.forecast.simpleforecast.forecastday[1].conditions);
      var $conditionsDay3 = $('<li>').text(data.forecast.simpleforecast.forecastday[2].conditions);

    	console.log($conditionsDay1);
    	$('#forecast').append($highDay1);
  	}
  });
}
getForecast();
