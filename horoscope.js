
var horoscopeSign = document.getElementById("horoscopeSign");
var horoscopeDate = document.getElementById("horoscopeDate");
var horoscopeText = document.getElementById("horoscope");

var aries = document.getElementById("aries").onclick = function() {
	getDailyHoroscope("aries");
}
var taurus = document.getElementById("taurus").onclick = function() {
	getDailyHoroscope("taurus");
}
var gemini = document.getElementById("gemini").onclick = function() {
	getDailyHoroscope("gemini");
}
var cancer = document.getElementById("cancer").onclick = function() {
	getDailyHoroscope("cancer");
}
var leo = document.getElementById("leo").onclick = function() {
	getDailyHoroscope("leo");
}
var virgo = document.getElementById("virgo").onclick = function() {
	getDailyHoroscope("virgo");
}
var libra = document.getElementById("libra").onclick = function() {
	getDailyHoroscope("libra");
}
var scorpio = document.getElementById("scorpio").onclick = function() {
	getDailyHoroscope("scorpio");
}
var sagittarius = document.getElementById("sagittarius").onclick = function() {
	getDailyHoroscope("sagittarius");
}
var capricorn = document.getElementById("capricorn").onclick = function() {
	getDailyHoroscope("capricorn");
}
var aquarius = document.getElementById("aquarius").onclick = function() {
	getDailyHoroscope("aquarius");
}
var pisces = document.getElementById("pisces").onclick = function() {
	getDailyHoroscope("pisces");
}

window.onload = getDailyHoroscope("aries");


function getDailyHoroscope(sign) {
	
	var yql_url = 'https://query.yahooapis.com/v1/public/yql';
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/" + sign + "/today";
	
	var horoscope;
		
	$.ajax({
		url: yql_url,
		data: {
			q: 'SELECT * FROM json WHERE url="'+url+'"',
			format: 'json',
			jsonCompat: 'new',
		},
		dataType: 'jsonp',
		success: function(response){
			console.log(response);
			var date = response.query.results.json.date;
			var horoscope = response.query.results.json.horoscope;
			var sign = response.query.results.json.sunsign;

			horoscopeSign.innerHTML = sign;
			horoscopeDate.innerHTML = date;
			horoscopeText.innerHTML = horoscope;
			
			}
	})

}