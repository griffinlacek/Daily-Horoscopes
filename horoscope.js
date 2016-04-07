var horoscopeSign = document.getElementById("horoscopeSign");
var horoscopeDate = document.getElementById("horoscopeDate");
var horoscopeText = document.getElementById("horoscope");

var currSign = "aries";

var yesterday = document.getElementById("yesterday");
yesterday.onclick = function() {
	getDailyHoroscope(currSign, "yesterday");
	yesterday.style.textDecoration = "underline";
	today.style.textDecoration = "none";
	tomorrow.style.textDecoration = "none";
}

var today = document.getElementById("today");
today.onclick = function() {
	getDailyHoroscope(currSign, "today");
}

var tomorrow = document.getElementById("tomorrow");
tomorrow.onclick = function() {
	getDailyHoroscope(currSign, "tomorrow");
	yesterday.style.textDecoration = "none";
	today.style.textDecoration = "none";
	tomorrow.style.textDecoration = "underline";
}

var aries = document.getElementById("aries").onclick = function() {
	getDailyHoroscope("aries", "today");
}
var taurus = document.getElementById("taurus").onclick = function() {
	getDailyHoroscope("taurus", "today");
}
var gemini = document.getElementById("gemini").onclick = function() {
	getDailyHoroscope("gemini", "today");
}
var cancer = document.getElementById("cancer").onclick = function() {
	getDailyHoroscope("cancer", "today");
}
var leo = document.getElementById("leo").onclick = function() {
	getDailyHoroscope("leo", "today");
}
var virgo = document.getElementById("virgo").onclick = function() {
	getDailyHoroscope("virgo", "today");
}
var libra = document.getElementById("libra").onclick = function() {
	getDailyHoroscope("libra", "today");
}
var scorpio = document.getElementById("scorpio").onclick = function() {
	getDailyHoroscope("scorpio", "today");
}
var sagittarius = document.getElementById("sagittarius").onclick = function() {
	getDailyHoroscope("sagittarius", "today");
}
var capricorn = document.getElementById("capricorn").onclick = function() {
	getDailyHoroscope("capricorn", "today");
}
var aquarius = document.getElementById("aquarius").onclick = function() {
	getDailyHoroscope("aquarius", "today");
}
var pisces = document.getElementById("pisces").onclick = function() {
	getDailyHoroscope("pisces", "today");
}

window.onload = getDailyHoroscope("aries", "today");

/* 
 * Routes json request through Yahoo Query Language to use JSONP to overcome
 * cross-domain restrictions. Updates Horoscope info accordingly.
 */
function getDailyHoroscope(sign, day) {
	
	resetUnderline();
	
	var yql_url = 'https://query.yahooapis.com/v1/public/yql';
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/" + sign + "/" + day;
	
	var horoscope;
		
	$.ajax({
		url: yql_url,
		data: {
			q: 'SELECT * FROM json WHERE url="'+url+'"',
			format: 'json',
			jsonCompat: 'new',
		},
		timeout: 2500,
		tryCount: 0,
		retryLimit: 3,
		dataType: 'jsonp',
		success: function(response){
			if(response.query.results == null) {
				this.tryCount++;
				if(this.tryCount <= this.retryLimit) {
					//Try API request again if bad results
					$.ajax(this);
					return;
				}
				horoscopeText.innerHTML = "Problem getting horoscope. Try again!";
				return;
			}	
			var date = response.query.results.json.date;
			var horoscope = response.query.results.json.horoscope;
			var sign = response.query.results.json.sunsign;
			

			currSign = sign.toLowerCase();
			
			horoscopeSign.innerHTML = sign;
			horoscopeDate.innerHTML = date;
			horoscopeText.innerHTML = horoscope;
		},
		error: function(x, t, e) {
			if(t==="timeout") {
				horoscope.innerHTML = "Problem getting horoscope. Try again!";
			}
		}
	});
}

//Sets underline under "Today"
function resetUnderline() {
	yesterday.style.textDecoration = "none";
	today.style.textDecoration = "underline";
	tomorrow.style.textDecoration = "none";
}