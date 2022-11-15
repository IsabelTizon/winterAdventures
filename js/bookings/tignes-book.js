//I initialize the variable rate to 0 to add later the different prices with the type of room
let rate = 0;

// function to calculate the cost
function CalculateCost() {
	//3 variables for 3 inputs
	let name = document.getElementById("customername").value.toUpperCase();
	let numNights = document.getElementById("nights").value;
	let roomType = document.getElementById("roomType").value;

	//Cleaning inputs
	document.getElementById("customername").value = "";
	document.getElementById("nights").value = "";

	//I initialize the variable discount to 0
	let discount = 0;
	//if our 3 variables (inputs) are no fill up the DOM (modal) will show us this message
	if (!name || !numNights || !roomType) {
		document.getElementById("enterMoreDetails").innerHTML =
			"YOU MUST ENTER ALL THE DETAILS";
	} else {
		let total = numNights * rate;
		//If the number of nights is greater than or equal to 4, a 10% discount will be applied
		if (numNights >= 4) {
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
			"modalroomType"
		).innerHTML = `${roomType} room booked`;

		document.getElementById(
			"modalNumNights"
		).innerHTML = `${numNights} nights: £${rate}  per night`;

		document.getElementById(
			"modalDiscount"
		).innerHTML = `Cost of stay £${total} - £ ${discount} discount!`;

		document.getElementById(
			"modalTotalCost"
		).innerHTML = `Total cost is now £${discountedCost}`;
	}
}

// Changing the picture of our room
function RoomChanged() {
	let roomPicture = document.getElementById("roomType").value;

	console.log("room picture", roomPicture);

	switch (roomPicture) {
		case "Single":
			console.log("Single Room");
			document.getElementById("photo").src =
				"../media/laTania-book/single1.jpg";
			//
			rate = 100;
			break;
		case "Twin":
			console.log("Twin");
			document.getElementById("photo").src = "../media/laTania-book/twin1.jpg";
			rate = 120;
			break;
		case "Double":
			console.log("Double");
			document.getElementById("photo").src =
				"../media/laTania-book/double1.jpg";
			rate = 140;
			break;
		case "Superior":
			console.log("Superior Double");
			document.getElementById("photo").src =
				"../media/laTania-book/superior1.jpg";
			rate = 170;
			break;
		case "Triple":
			console.log("Triple");
			document.getElementById("photo").src =
				"../media/laTania-book/triple1.jpg";
			rate = 200;
			break;
		default:
			console.log("None Selected");
			document.getElementById("photo").src = "../media/laTania-book/hotel1.jpg";
			rate = 0;
	}
}

// event click the btn book and do the function calculate the cost
document.getElementById("Book").addEventListener("click", CalculateCost);

//event to change the picture of the room
document.getElementById("roomType").addEventListener("change", RoomChanged);
