// target frames per second
const FPS = 30,
//height/width constants 
      w = 240,
      h = 480,
      e1w = 30,
      e1h = 30;
//x-y variables
var	x = 0,
	y = 0,
	bgx = 0,
	bg1y = -480,
	bg2y = -1440,
	px = (w/2)-30,
	py = (h-30),
	e1x = 50,
	e1y = -45,
//images and sprites
	bg1 = new Image();
	bg1.src = "apps/helium/images/background.png";
var	bg2 = new Image();
	bg2.src = "apps/helium/images/background.png";
var	pSprite = new Image();
	pSprite.src = "apps/helium/images/psprite.png";
//keys
var	upKey = false,
	downKey = false,
	rightKey = false,
	leftKey = false,
//enemies
	enemy1Total = 5,
	enemies = [],
	enemy1Speed = 3,
//canvas element vars
	canvas = null,
	body = null,
	context2D = null;
//enemy init
for (var i = 0; i < enemy1Total; i++) {
	enemies.push([e1x, e1y, e1w, e1h, enemy1Speed]);
	e1x += e1w + 60;
}
window.onload = init;
function init(){
	canvas = document.getElementById('helium');	
	context2D = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
	context2D.drawImage(bg1, 0, 0);
	setInterval(draw, 1000 / FPS);
	document.addEventListener('keydown', keyDown, false);
	document.addEventListener('keyup', keyUp, false);
}

function draw(){
	canvas.width = canvas.width;
	backgroundDraw();
	moveEnemy1();
	drawEnemy1();
	playerDraw();
}

function backgroundDraw(){
	context2D.drawImage(bg1, bgx, bg1y);
	context2D.drawImage(bg2, bgx, bg2y);
	bg1y += 2;
	bg2y += 2;
	if (bg1y == 480){
		bg1y = -1440;
	}
	if (bg2y == 480){
		bg2y = -1440;
	}
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
}

function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

function playerDraw(){
	if (rightKey) px += 5;
	else if (leftKey) px -= 5;
	if (upKey) py -= 5;
	else if (downKey) py += 5;
	playerBounds();
	context2D.drawImage(pSprite, px, py);
}

function playerBounds(){
	if (px > (w-31)){
		px = (w-30);
	}
	if (px < 1){
		px = 0;
	}
	if(py > (h-31)){
		py = (h-30);
	}
	if (py < 1){
		py = 0;
	}
}

function drawEnemy1(){
	for (var i = 0; i < enemies.length; i++) {
    	context2D.fillStyle = '#f00';
    	context2D.fillRect(enemies[i][0], enemies[i][1], e1w, e1h);
  }
}

function moveEnemy1(){
	for (var i = 0; i < enemies.length; i++) {
    	if (enemies[i][1] < h) {
      		enemies[i][1] += enemies[i][4];
    	} else if (enemies[i][1] > h - 1) {
      		enemies[i][1] = -45;
    	}
  	}
}