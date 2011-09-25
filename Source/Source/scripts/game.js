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
        explodeEffect.volume=0;
        laserEffect.volume=0;
        explodeEffect.play();
        explodeEffect.pause();
        laserEffect.play();
        laserEffect.pause();
        explodeEffect.volume=1;
        laserEffect.volume=1;
	document.addEventListener('keydown', keyDown, false);
	document.addEventListener('keyup', keyUp, false);
	canvas.addEventListener('click', gameStart, false);
        var topScore = document.getElementById('topScore');
        var lastScore = document.getElementById('lastScore');
        if(localStorage["topScore"]){
            topScore.innerHTML = 'Your Highest Score Ever Was: '+localStorage["topScore"];
        }
        if(localStorage["lastScore"]){
            lastScore.innerHTML = 'Your Latest Score Was: '+localStorage["lastScore"];
        }
	//enemy init
	for (var i = 0; i < enemy1Total; i++) {
	    path = randomPath();
	    e1x = currentPath(path);
	    enemies.push([e1x, e1y, e1w, e1h, enemy1Speed, e1x]);
	}
	gameLoop();
}
function gameLoop(){
	ctx.clearRect(0,0,w,h)
	backgroundDraw();
	if (alive && gameStarted && lives > 0){
		moveEnemy1();
		moveLaser();
		drawEnemy1();
                laserFire();
                drawLaser();
		playerDraw();
                hitTest();
		shipCollision();
                lvlchecker();
	}else if (!gameStarted){
		intro();
	}else if (!alive){
		gameOver();
	}
	scoreboard();
	game = window.setTimeout(gameLoop, 1000 / FPS);
}
window.onload = init;