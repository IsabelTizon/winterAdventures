let rate = 0;

function CalculateCost() {
	let name = document.getElementById("customername").value.toUpperCase();
	let numNights = document.getElementById("nights").value;
	let roomType = document.getElementById("roomType").value;

	document.getElementById("customername").value = "";
	document.getElementById("nights").value = "";

	let discount = 0;

	if (!name || !numNights || !roomType) {
		document.getElementById("enterMoreDetails").innerHTML =
			"YOU MUST ENTER ALL THE DETAILS";
	} else {
		let total = numNights * rate;

		if (numNights >= 4) {
			console.log("10%");
			discount = total * 0.1;
		} else {
			console.log("no discount");
			discount = 0;
		}

		let discountedCost = total - discount;

		// modal
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
function RoomChanged() {
	let roomPicture = document.getElementById("roomType").value;

	console.log("room picture", roomPicture);

	switch (roomPicture) {
		case "Single":
			console.log("Single Room");
			document.getElementById("photo").src =
				"../media/laTania-book/single2.jpg";
			rate = 85;
			break;
		case "Twin":
			console.log("Twin");
			document.getElementById("photo").src = "../media/laTania-book/twin2.jpg";
			rate = 110;
			break;
		case "Double":
			console.log("Double");
			document.getElementById("photo").src =
				"../media/laTania-book/double2.jpg";
			rate = 110;
			break;
		case "Superior":
			console.log("Superior Double");
			document.getElementById("photo").src =
				"../media/laTania-book/superior2.jpg";
			rate = 145;
			break;
		case "Triple":
			console.log("Triple");
			document.getElementById("photo").src =
				"../media/laTania-book/triple2.jpg";
			rate = 160;
			break;
		default:
			console.log("None Selected");
			document.getElementById("photo").src = "../media/laTania-book/hotel2.jpg";
			rate = 0;
	}
}

document.getElementById("Book").addEventListener("click", CalculateCost);

document.getElementById("roomType").addEventListener("change", RoomChanged);
