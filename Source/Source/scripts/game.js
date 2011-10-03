/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>, unless otherwise noted.
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
	canvas.addEventListener('keydown', keyDown, false);
	canvas.addEventListener('keyup', keyUp, false);
        var topScore = document.getElementById('topScore');
        var lastScore = document.getElementById('lastScore');
        if(localStorage["topScore"]){
            topScore.innerHTML = 'Your Highest Score Ever Was: '+localStorage["topScore"];
        }
        if(localStorage["lastScore"]){
            lastScore.innerHTML = 'Your Latest Score Was: '+localStorage["lastScore"];
        }
	//enemy init
	for (var i = 0; i < enemyTotal; i++) {
	    path = randomPath();
	    e1x = currentPath(path);
	    type = randomType();
	    var speed = typeSpeed(type);
	    enemies.push(new Enemy(e1x, e1y, e1w, e1h, speed, e1x, type));
	}
	player = new Player(px,py);
	gameLoop();
}
function gameLoop(){
	ctx.clearRect(0,0,w,h)
	backgroundDraw();
	if (enterKey){
		gameStart();
	}
	if (!gameStarted){
		intro();
	}
	if (alive && gameStarted && lives > 0){
		lvlchecker();
		moveEnemy();
		moveLaser();
		drawEnemy();
                laserFire();
                drawLaser();
		playerDraw();
                hitTest();
		shipCollision();
	}
	if (!alive){
		gameOver();
	}
	scoreboard();
	game = window.setTimeout("gameLoop()", 1000 / FPS);
}
window.onload = init;