//arrow function
let rederingInputName = () => {
	// I took the username from localStorage and assign it to a variable
	const userLoggedName = JSON.parse(
		window.localStorage.getItem("userLoggedWinterAdventures")
	);

	//conditional
	if (!userLoggedName) {
		//if there is not name in my localStorage nothing will be render
		document.getElementById("userNameNav").style.display = none;
	} else {
		//if there is a name in my localStorage it will be render that variable using innerHTML
		document.getElementById("userNameNav").innerHTML = `${userLoggedName}`;
	}
};

//Calling
rederingInputName();
