//I initialize the variable rate to 0 to add later the different prices with the type of package
let rate = 0;

// function to calculate the cost
function CalculateCost() {
	//3 variables for 3 inputs
	let name = document.getElementById("customername").value.toUpperCase();
	let numPeople = document.getElementById("people").value;
	let packageType = document.getElementById("packageType").value;

	//Cleaning inputs
	document.getElementById("customername").value = "";
	document.getElementById("people").value = "";

	//I initialized the variable discount to 0
	let discount = 0;

	//if our 3 variables (inputs) are no fill up the DOM (modal) will show us this message
	if (!name || !numPeople || !packageType) {
		document.getElementById("enterMoreDetails").innerHTML =
			"YOU MUST ENTER ALL THE DETAILS";
	} else {
		let total = numPeople * rate;

		//If the number of packages is greater than or equal to 4, a 10% discount will be applied
		if (numPeople >= 4) {
			console.log("10%");
			discount = total * 0.1;
		} else {
			//if not, no discount will be applied
			console.log("no discount");
			discount = 0;
		}

		// The total with the discount if any
		let discountedCost = total - discount;

		// modal- DOM
		document.getElementById("modalName").innerHTML = `${name}`;

		document.getElementById(
			"modalpackageType"
		).innerHTML = `${packageType} package booked`;

		document.getElementById(
			"modalNumPeople"
		).innerHTML = `${numPeople} people, £${rate}  per day`;

		document.getElementById(
			"modalDiscount"
		).innerHTML = `Cost: £${total} - £${discount} discount!`;

		document.getElementById(
			"modalTotalCost"
		).innerHTML = `Total cost: £${discountedCost}`;
	}
}

// Changing the picture of our room
function packageChanged() {
	let packagePicture = document.getElementById("packageType").value;

	console.log("package picture", packagePicture);

	switch (packagePicture) {
		case "Economy-ski-boots-poles":
			console.log("Economy-ski-boots-poles");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/economy2.jpg";
			rate = 90;
			break;
		case "Economy-snowboard-boots":
			console.log("Economy-snowboard-boots");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/intermediate.jpg";
			rate = 119;
			break;
		case "Intermediate-ski-boots-poles":
			console.log("Intermediate-ski-boots-poles");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/performance.jpg";
			rate = 120;
			break;
		case "Intermediate-snowboard-boots":
			console.log("Intermediate-snowboard-boots");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/snowboard1.jpg";
			rate = 145;
			break;
		case "Performance-ski-boots-poles":
			console.log("Performance-ski-boots-poles");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/snowboard2.jpg";
			rate = 145;
			break;
		case "Performance-snowboard-boots":
			console.log("Performance-snowboard-boots");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/snowboard3.jpg";
			rate = 170;
			break;
		default:
			console.log("None Selected");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/none.jpg";
			rate = 0;
	}
}

// event click the btn book and do the function calculate the cost
document.getElementById("Book").addEventListener("click", CalculateCost);

//event to change the picture of the package
document
	.getElementById("packageType")
	.addEventListener("change", packageChanged);
