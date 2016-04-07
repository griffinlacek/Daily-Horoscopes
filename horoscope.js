var horoscopeSign = document.getElementById("horoscopeSign");
var horoscopeDate = document.getElementById("horoscopeDate");
var horoscope = document.getElementById("horoscope");

var xhr = new XMLHttpRequest();

window.onload = getDailyHoroscope("Aries");

function getDailyHoroscope(sign) {
	
	var url = "http://horoscope-api.herokuapp.com/horoscope/today/" + sign;
	
	xhr.open('GET', url, true);
	xhr.send();
	
	xhr.addEventListener("readystatechange", processRequest, false);
	
	xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
	if (xhr.readyState == 4 && xhr.status == 200) {
		var response = JSON.parse(xhr.responseText);
		
		horoscopeSign.innerHTML = response.sunsign;
		horoscopeDate.innerHTML = response.date;
		horoscope.innerHTML = response.horoscope;
	}
}