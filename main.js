const FPS = 30;// target frames per second
const w = 240;
const h = 480;
const width = w - 150;
const height = h - 150;
var x = 0;
var y = 0;
var bgx = 0;
var bgy = -480;
var xDirection = 5;
var yDirection = 5;
var bg = new Image();
	bg.src = "images/background.png";
var canvas = null;
var body = null;
var context2D = null;

window.onload = init;

function init(){
	canvas = document.getElementById('helium');	
	context2D = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
	context2D.drawImage(bg, 0, 0);
	setInterval(draw, 1000 / FPS);
}

function backgroundDraw(){
	context2D.drawImage(bg, bgx, bgy);
	bgy += 1;
}


function draw(){
	canvas.width = canvas.width;
	backgroundDraw();
}

