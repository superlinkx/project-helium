/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/



//Root directory var
if(!b) var b = "";
// target frames per second
var	FPS = 30,
//height/width constants 
	w = 240,
	h = 480,
	pw = 30,
	ph = 30,
	e1w = 30,
	e1h = 30;
//x-y variables
	x = 0,
	y = 0,
	bgx = 0,
	bg1y = -480,
	bg2y = -1440,
	px = (w/2)-15,
	py = (h-30),
	e1x = 25,
	e1y = -45,
//images and sprites
	bg1 = new Image();
	bg1.src = b+"images/background.png";
var	bg2 = new Image();
	bg2.src = b+"images/background.png";
var	pSprite = new Image();
	pSprite.src = b+"images/psprite.png";
//keys
var	upKey = false,
	downKey = false,
	rightKey = false,
	leftKey = false,
//enemies
	enemy1Total = 3,
	enemies = [],
	enemy1Speed = 3,
//lasers
	lasersTotal = 9,
	lasers = [],
//scoring
	score = 0,
	alive = true,
	lives = 3,
	gameStarted = false,
//canvas element vars
	canvas = null,
	body = null,
	ctx = null;
//enemy init
for (var i = 0; i < enemy1Total; i++) {
	enemies.push([e1x, e1y, e1w, e1h, enemy1Speed]);
	e1x += e1w + 50;
}

function backgroundDraw(){
	ctx.drawImage(bg1, bgx, bg1y);
	ctx.drawImage(bg2, bgx, bg2y);
	bg1y += 2;
	bg2y += 2;
	if (bg1y == 480){
		bg1y = -1440;
	}
	if (bg2y == 480){
		bg2y = -1440;
	}
}

function playerDraw(){
	if (rightKey) px += 5;
	else if (leftKey) px -= 5;
	if (upKey) py -= 5;
	else if (downKey) py += 5;
	playerBounds();
	ctx.drawImage(pSprite, px, py);
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
    	ctx.fillStyle = '#f00';
    	ctx.fillRect(enemies[i][0], enemies[i][1], e1w, e1h);
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

function drawLaser(){
	if (lasers.length){
		for (var i=0; i< lasers.length; i++){
			ctx.fillStyle = '#f00';
			ctx.fillRect(lasers[i][0],lasers[i][1],lasers[i][2],lasers[i][3],lasers[i][4],lasers[i][5],lasers[i][6],lasers[i][7],lasers[i][8],lasers[i][9],lasers[i][10])
		}
	}
}

function moveLaser(){
	for(var i = 0; i < lasers.length; i++){
		if (lasers[i][1] > -11){
			lasers[i][1] -= 10;
		} else if (lasers[i][1] < -10){
			lasers.splice(i,1);
		}
	}
}

function hitTest(){
	var remove = false;
	for (var i = 0; i < lasers.length; i++){
		for(var j = 0; j < enemies.length; j++){
			if (lasers[i][1] <= (enemies[j][1] + enemies[j][3]) && lasers[i][0] >= enemies[j][0] && lasers[i][0] <= (enemies[j][0] + enemies[j][2])){
				remove = true;
				enemies.splice(j,1);
				score += 10;
				enemies.push([(Math.random() * 200) + 25, -45, e1w, e1h, enemy1Speed]);
			}
		}
		if (remove == true){
			lasers.splice(i,1);
			remove = false;
		}
	}
}

function shipCollision(){
	var pxw = px + pw,
	    pyh = py + ph;
	for (var i = 0; i < enemies.length; i++){
		if (px >= enemies[i][0] && px <= enemies[i][0] + e1w && py <= enemies[i][1] + e1h){
			checkLives();
		}
		if (pxw <= enemies[i][0] + e1w && pxw >= enemies[i][0] && py >= enemies[i][1] && py <= enemies[i][1] + e1h){
			checkLives();
		}
		if (pyh >= enemies[i][1] && pyh <= enemies[i][1] + e1h && px >= enemies[i][0] && px <= enemies[i][0] + e1w){
			checkLives();
		}
		if (pyh >= enemies[i][1] && pyh <= enemies[i][1] + e1h && pxw <= enemies[i][0] + e1w && pxw >= enemies[i][0]){
			checkLives();
		}
	}
}

function checkLives(){
	lives -= 1;
	if (lives > 0){
		reset();
	} else if (lives == 0){
		alive = false;
	}
}

function reset(){
	var enemy_reset_x = 25;
	px = (w/2) - 15, py = h - 30, pw = 30, ph = 30;
	for (var i = 0; i < enemies.length; i++){
		enemies[i][0] = enemy_reset_x;
		enemies[i][1] = -45;
		enemy_reset_x = enemy_reset_x + e1w + 50;
	}
}

function scoreTotal(){
	ctx.font = 'bold 18px Arial';
	ctx.fillStyle = 'rgba(255,255,255,0.8)';
	ctx.fillRect(0,0,w,60)
	ctx.fillStyle = '#f00';
	ctx.fillText('Score: ', 10, 55);
	ctx.fillText(score, 70, 55);
	ctx.fillText('Lives:', 10, 30);
	ctx.fillText(lives, 68, 30);
	if (!alive){
		lives = 0;
		ctx.fillText('Game Over!', (w/2)-55, h/2);
		ctx.fillRect((w/2)-53, (h/2)+ 10,100,40);
		ctx.fillStyle = '#000';
		ctx.fillText('Continue?', (w/2)-48, (h/2)+35);
		canvas.addEventListener('click',continueButton,false);
	}
	if (!gameStarted){
		ctx.fillStyle = 'rgba(255,255,255,0.7)';
		ctx.fillRect(0,0,w,h);
		ctx.fillStyle = '#f00';
		ctx.font = 'bold 32px Arial';
		ctx.fillText('Project Helium', w/2 - 110, h/2);
		ctx.font = 'bold 20px Arial';
		ctx.fillText('Click to Play', w/2 -56, h/2 + 30);
		ctx.fillText('Use ASWD to move', w/2-100, h/2 + 60);
		ctx.fillText('Use the j key to shoot', w/2-100, h/2+90);
	}
}

function gameStart(){
	gameStarted = true;
	canvas.removeEventListener('click', gameStart, false);
}

function init(){
	canvas = document.getElementById('helium');	
	ctx = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
	ctx.drawImage(bg1, 0, 0);
	document.addEventListener('keydown', keyDown, false);
	document.addEventListener('keyup', keyUp, false);
	document.addEventListener('click', gameStart, false);
	gameLoop();
}

function gameLoop(){
	canvas.width = canvas.width;
	backgroundDraw();
	if (alive && gameStarted && lives > 0){
		moveEnemy1();
		moveLaser();
		drawEnemy1();
		playerDraw();
		drawLaser();
		hitTest();
		shipCollision();
	}	
	scoreTotal();
	game = setTimeout(gameLoop, 1000 / FPS);
}

function keyDown(e) {
	if (e.keyCode == 68) rightKey = true;
	else if (e.keyCode == 65) leftKey = true;
	if (e.keyCode == 87) upKey = true;
	else if (e.keyCode == 83) downKey = true;
	if (e.keyCode == 74 && lasers.length <= lasersTotal) lasers.push([px + 15, py - 30, 4, 20]);
}

function keyUp(e) {
	if (e.keyCode == 68) rightKey = false;
	else if (e.keyCode == 65) leftKey = false;
	if (e.keyCode == 87) upKey = false;
	else if (e.keyCode == 83) downKey = false;
}

function continueButton(e){
	var cursorPos = getCursorPos(e);
	if ((cursorPos.x > (w/2)-53 && cursorPos.x < (w/2)+47 && cursorPos.y > (h/2)+10 && cursorPos.y < (h/2)+50) || e.keyCode == 13){
		alive = true;
		lives = 3;
		score = 0;
		reset();
		canvas.removeEventListener('click',continueButton,false);
	}
}

function getCursorPos(e){
	var x;
	var y;
	if (e.pageX || e.pageY){
		x = e.pageX;
		y = e.pageY;
	}else{
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	var cursorPos = new cursorPosition(x,y);
	return cursorPos;
}

function cursorPosition(x,y){
	this.x = x;
	this.y = y;
}

window.onload = init;