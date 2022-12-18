const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6272da650cmsh243bdb71dbe5099p1f625fjsnc36e8a592ad3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	 var inputID = document.getElementById("placeBox");
	 var cityName = document.getElementById("cityName");
	 inputID.innerHTML = city;
	 cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		// Its about the first card
		document.getElementById("temperature").innerHTML =response.temp+"°C"
		document.getElementById("Max-temp").innerHTML = response.max_temp+"°C"
		document.getElementById("head-temp").innerHTML = response.temp
		document.getElementById("Min_temp").innerHTML = response.min_temp+"°C"

		// Second Card
		document.getElementById("feels").innerHTML = response.cloud_pct
		document.getElementById("humidity").innerHTML = response.max_temp
		document.getElementById("head-feels").innerHTML = response.feels_like
		document.getElementById("wind").innerHTML = response.wind_speed
	
	})
	.catch(err => console.error(err));
}


const subs = document.getElementById("submit");
const input = document.getElementById("placeBox");
input.addEventListener("keypress", function(e){
	if(e.key === "Enter"){
		document.getElementById("submit").click();
	}
	
})
subs.addEventListener("click", function(e){
	getWeather(placeBox.value);
})

	



