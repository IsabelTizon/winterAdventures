// let rederingInputName = () => {
// 	// I took the username from localStorage and assign it to a variable
// 	const userLoggedName = JSON.parse(
// 		window.localStorage.getItem("userLoggedWinterAdventures")
// 	);
// 	userLoggedName.map(myFunction)

// 	function myFunction() {
// 		if (!userLoggedName) {
// 			document.getElementById("userNameNav").style.display = none;
// 		} else {
// 			//I rendered that variable using innerHTML
// 			document.getElementById("userNameNav").innerHTML = `${userLoggedName}`;
// 		}
// 	}
// };
let rederingInputName = () => {
	// I took the username from localStorage and assign it to a variable
	const userLoggedName = JSON.parse(
		window.localStorage.getItem("userLoggedWinterAdventures")
	);

	if (!userLoggedName) {
		document.getElementById("userNameNav").style.display = none;
	} else {
		//I rendered that variable using innerHTML
		document.getElementById("userNameNav").innerHTML = `${userLoggedName}`;
	}
};

//Calling
rederingInputName();
