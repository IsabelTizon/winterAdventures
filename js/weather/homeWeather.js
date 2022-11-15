// Variables
let input = document.querySelector(".input-tx");
let main = document.querySelector("#name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let button = document.querySelector(".submit");
let icon = document.querySelector(".icon");

// Click Events
button.addEventListener("click", function () {
	//to grab the https
	fetch(
		//adding a value in the +?q and our keyAPI
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			input.value +
			"&appid=f0f46f1e4119a0d4d828076c1d0b08c4"
	)
		.then((response) => response.json()) //return json objects
		.then((data) => {
			//Grab the values
			let tempValue = data["main"]["temp"]; //json object main{temp} API system
			let nameValue = data["name"]; // getting the name of the city
			let descValue = data["weather"][0]["description"]; //because there is more than one weather in the API system we are going to select the array [0] of the object weather
			let desCelsiusValue = Math.floor(tempValue - 273.15); //passing to celsius
			let iconCode = data["weather"][0]["icon"]; // json icon API system

			//Rendering the values
			main.innerHTML = `${nameValue}:`;
			//<h1 class="name" id="name"></h1> in HTML

			desc.innerHTML = `${descValue}, `;
			//<p class="desc"></p> in the HTML

			temp.innerHTML = `${desCelsiusValue}°, `;
			//<p class="temp"></p> in the HTML
			// temp.innerHTML = `Temperature: ${tempValue}`;

			icon.style.display = "block";
			//Displaying the styles

			icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
			//getting the source from the API
		})

		//if the name was not enter properly of not enter at all the next message will render
		.catch((error) => alert("Please enter a valid city or resort!"));

	//cleaning after the use
	input.value = "";
});
