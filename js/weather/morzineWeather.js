// Variables
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");

let icon = document.querySelector(".icon");

// Click Events
function morzine() {
	//to grab the https
	fetch(
		//adding a value in the +?q and our keyAPI
		"https://api.openweathermap.org/data/2.5/weather?lat=46.17&lon=6.70&appid=f0f46f1e4119a0d4d828076c1d0b08c4"
	)
		.then((response) => response.json()) //return json objects
		.then((data) => {
			//Grab the values
			let tempValue = data["main"]["temp"]; //json object main{temp} API system

			let descValue = data["weather"][0]["description"]; //because there is more than one weather in the API system we are going to select the array [0] of the object weather
			let desCelsiusValue = Math.floor(tempValue - 273.15); //passing to celsius
			let iconCode = data["weather"][0]["icon"]; // json icon API system

			//Rendering the values
			desc.innerHTML = `${descValue}`;
			//<p class="desc"></p> in the HTML

			temp.innerHTML = `${desCelsiusValue}°`;
			//<p class="temp"></p> in the HTML
			// temp.innerHTML = `Temperature: ${tempValue}`;

			icon.style.display = "block";
			//Displaying the styles

			icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
			//getting the source from the API
		})

		.catch((error) => alert("Something is wrong"));
}
morzine();
