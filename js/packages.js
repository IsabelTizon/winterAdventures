let rate = 0;

function CalculateCost() {
	let name = document.getElementById("customername").value.toUpperCase();
	let numPeople = document.getElementById("people").value;
	let packageType = document.getElementById("packageType").value;

	let discount = 0;

	if (name == "") {
		document.getElementById("details").innerHTML = "YOU MUST ENTER YOUR NAME";
	} else if (numPeople <= 0) {
		document.getElementById("details").innerHTML =
			"YOU MUST ENTER THE NUMBER OF NIGHTS";
	} else if (packageType == "No") {
		document.getElementById("details").innerHTML =
			"YOU MUST ENTER THE TYPE OF ROOM";
	} else {
		let total = numPeople * rate;

		if (numPeople >= 4) {
			console.log("10%");
			discount = total * 0.1;
		} else {
			console.log("no discount");
			discount = 0;
		}

		let discountedCost = total - discount;

		document.getElementById("details").innerHTML = name + "<br><br>";

		document.getElementById("details").innerHTML +=
			packageType + " package booked<br><br>";

		document.getElementById("details").innerHTML +=
			numPeople + " package @ £" + rate + " per night" + "<br><br>";

		document.getElementById("details").innerHTML +=
			"Cost of stay £" + total + " - £" + discount + " discount!" + "<br><br>";

		document.getElementById("details").innerHTML +=
			"Total cost is now £" + discountedCost;
	}
	document.getElementById("details").style.display = "block";
}

function packageChanged() {
	let packagePicture = document.getElementById("packageType").value;

	console.log("package picture", packagePicture);

	switch (packagePicture) {
		case "Economy-ski-boots-poles":
			console.log("Economy-ski-boots-poles");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/economy1.jpg";
			rate = 90;
			break;
		case "Economy-snowboard-boots":
			console.log("Economy-snowboard-boots");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/economy1.jpg";
			rate = 119;
			break;
		case "Intermediate-ski-boots-poles":
			console.log("Intermediate-ski-boots-poles");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/economy2.jpg";
			rate = 120;
			break;
		case "Intermediate-snowboard-boots":
			console.log("Intermediate-snowboard-boots");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/intermediate.jpg";
			rate = 145;
			break;
		case "Performance-ski-boots-poles":
			console.log("Performance-ski-boots-poles");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/performance.jpg";
			rate = 145;
			break;
		case "Performance-snowboard-boots":
			console.log("Performance-snowboard-boots");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/economy1.jpg";
			rate = 170;
			break;
		default:
			console.log("None Selected");
			document.getElementById("photo").src =
				"../media/skii&Snowing/packages-prices/economy2.jpg";
			rate = 0;
	}
}

document.getElementById("Book").addEventListener("click", CalculateCost);

document
	.getElementById("packageType")
	.addEventListener("change", packageChanged);