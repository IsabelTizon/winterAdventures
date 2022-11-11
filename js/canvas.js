/* canvas cloud */
/* To access the document */
const canvas = document.querySelector(".canvas");
/* convention variable */
const ctx = canvas.getContext("2d");
/* bc */
// ctx.fillStyle = "skyblue";
/* four arguments to pass horizontal, vertical, width and height */
ctx.fillRect(0, 0, canvas.width, canvas.height);
/* position of the cloud */
cloud(70, 140, 0.6); /* position and size of the cloud */
/* text Winter Adventures */
ctx.font = "90px Arial"; /* font */
// ctx.fillStyle = "purple"; /* colour */
ctx.fillStyle = "#008ed6";
ctx.fillText("WA", 100, 100); /* text and position */

/*drawing the cloud*/
function cloud(x, y, scale) {
	ctx.save();
	ctx.translate(x, y);
	ctx.scale(scale, scale);
	ctx.beginPath();
	ctx.moveTo(0, 0);

	ctx.bezierCurveTo(-40, 20, -40, 70, 60, 70);
	ctx.bezierCurveTo(80, 100, 150, 100, 170, 70);
	ctx.bezierCurveTo(250, 70, 250, 40, 220, 20);
	ctx.bezierCurveTo(260, -40, 200, -50, 170, -30);
	ctx.bezierCurveTo(150, -75, 80, -60, 80, -30);
	ctx.bezierCurveTo(30, -75, -20, -60, 0, 0);
	ctx.strokeStyle = "lightgray";
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}
