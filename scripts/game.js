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
                laserFire();
		hitTest();
		shipCollision();
                lvlchecker();
	}	
	scoreTotal();
	game = setTimeout(gameLoop, 1000 / FPS);
}

window.onload = init;