// After click login btn, grab the values that the user had introduced  and clear the field
document.getElementById("loginIn").addEventListener("click", function (e) {
	e.preventDefault();
	let inputName = document.getElementById("name").value.trim(); //I assigned to the inputName variable the value that I introduced through the DOM, I changed it to uppercase and allow no white space to interfere
	let inputpassword = document.getElementById("password").value.trim(); //I assigned to the inputpassword variable the value that I introduced through the DOM, I did nor white space to interfere whith the trim method and I returned the string as a number with the parseInt method

	document.getElementById("name").value = " "; //Clearing input field after click
	document.getElementById("password").value = " "; //Clearing input field after click

	//Calling
	gettingDetails(inputName, inputpassword);
});

function gettingDetails(inputName, inputpassword) {
	// I declared the function with two parameters
	if (!inputName || !inputpassword) {
		//I did a conditional, if one of the fields has not been entered, an error message will be display
		alert("Please enter all the details");
	} else {
		//but if the two fields are recognized, it will execute the next block

		const array = localStorage.getItem("userDetailsArrayWinterAdventures");
		console.log("array sin parsear", array);

		const userDetailsArrayWinterAdventures = JSON.parse(
			localStorage.getItem("userDetailsArrayWinterAdventures")
		); //In the assignment, the assigned is always a string, that's why I use the parse method to save it in the local storage as an object

		console.log(Array.isArray(userDetailsArrayWinterAdventures)); //I verified that it has been saved as an array
		console.log("my array", userDetailsArrayWinterAdventures); //I verified that the array contains properties and values

		//looping through the array with a for to see if the name or password exists
		function userDetailsArrayWinterAdventuresFound() {
			for (let i = 0; i <= userDetailsArrayWinterAdventures.length - 1; i++) {
				console.log("array element", userDetailsArrayWinterAdventures[i]);
				if (
					userDetailsArrayWinterAdventures[i].name === inputName &&
					userDetailsArrayWinterAdventures[i].password == inputpassword
				) {
					return true;
				}
			}
			return false;
		}

		if (userDetailsArrayWinterAdventuresFound()) {
			// If the same name and the same password have been found in our localStorage array, the name will be take and put it in another new localStorage array (set method) as a string with the method stringify
			localStorage.setItem(
				"userLoggedWinterAdventures",
				JSON.stringify(inputName)
			);

			//redirection to the home page if the user details (name  and password) were found
			window.location.href = "../index.html";
		} else {
			//As the user details have not been found a message renders on the screen
			alert("wrong details, try again");
		}
	}
}
