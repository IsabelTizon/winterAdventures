let rate = 0;

function CalculateCost() {
	let name = document.getElementById("customername").value.toUpperCase();
	let numPeople = document.getElementById("people").value;
	let packageType = document.getElementById("packageType").value;

	document.getElementById("customername").value = "";
	document.getElementById("people").value = "";

	let discount = 0;

	if (!name || !numPeople || !packageType) {
		document.getElementById("enterMoreDetails").innerHTML =
			"YOU MUST ENTER ALL THE DETAILS";
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

		document.getElementById("modalName").innerHTML = `${name}`;

		document.getElementById(
			"modalpackageType"
		).innerHTML = `${packageType} package booked`;

		document.getElementById(
			"modalNumPeople"
		).innerHTML = `$numPeople} package £" ${rate}  per night`;

		document.getElementById(
			"modalDiscount"
		).innerHTML = `Cost of stay £${total} - £${discount} discount!`;

		document.getElementById(
			"modalTotalCost"
		).innerHTML = `Total cost is now £${discountedCost}`;

		// document.getElementById("details").style.display = "block";
	}
}
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

document.getElementById("Book").addEventListener("click", CalculateCost);

document
	.getElementById("packageType")
	.addEventListener("change", packageChanged);
