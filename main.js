const FPS = 60;// target frames per second
const w = 240;
const h = 480;
const width = w - 150;
const height = h - 150;
var x = 0;
var y = 0;
var bgx = 0;
var bg1y = -480;
var bg2y = -1440;
var xDirection = 5;
var yDirection = 5;
var bg1 = new Image();
	bg1.src = "images/background.png";
var bg2 = new Image();
	bg2.src = "images/background.png";
var pSprite = new Image();
	pSprite.src = "images/psprite.png";
var canvas = null;
var body = null;
var context2D = null;

window.onload = init;

function init(){
	canvas = document.getElementById('helium');	
	context2D = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
	context2D.drawImage(bg1, 0, 0);
	setInterval(draw, 1000 / FPS);
}

function backgroundDraw(){
	context2D.drawImage(bg1, bgx, bg1y);
	context2D.drawImage(bg2, bgx, bg2y);
	bg1y += 1;
	bg2y += 1;
	if (bg1y == 480){
		bg1y = -1440;
	}
	if (bg2y == 480){
		bg2y = -1440;
	}

}

function playerDraw(){
	context2D.drawImage(pSprite, px, py);
}


function draw(){
	canvas.width = canvas.width;
	backgroundDraw();
	playerDraw();
}

