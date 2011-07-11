/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/

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
                lvlchecker();
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