const FPS = 30;// target frames per second
const w = 240;
const h = 480;
const width = w - 150;
const height = h - 150;
var x = 0;
var y = 0;
var xDirection = 5;
var yDirection = 5;
var image = new Image();
	image.src = "/projects/hydrogen/apps/helium/images/smiley.svg";
var canvas = null;
var body = null;
var context2D = null;

window.onload = init;

function init(){
	canvas = document.getElementById('helium');	
	context2D = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
	context2D.drawImage(image, x, y);
	setInterval(draw, 1000 / FPS);
}

function draw(){
	canvas.width = canvas.width;
   	context2D.drawImage(image, x, y);

    x += 1 * xDirection;
    y += 1 * yDirection;

    if (x >= width){
		x = width;
    	xDirection = -5;
    }

    else if (x <= 0){
    	x = 0;
        xDirection = 5;
    }

	if (y >= height){
		y = height;
       	yDirection = -5;
	}

	else if (y <= 0){
       	y = 0;
   		yDirection = 5;
   	}
}
