/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/
function lvlchecker(){
	switch(sc0re){
		case 0: lvl = 1;
			break;
		case 1000: lvl = 2;
			break;
		case 2000: lvl = 3;
			break;
		case 3000: lvl = 4;
			break;
		case 4000: lvl = 5;
			break;
		case 5000: lvl = 6;
			break;
		case 6000: lvl = 7;
			break;
		case 7000: lvl = 8;
			break;
		case 8000: lvl = 9;
			break;
		case 9000: lvl = 10;
			break;
		default: break;
	}
	switch(lvl){
		case 1:
			enemy1Speed = 3;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 2:
			enemy1Speed = 4;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 3:
			enemy1Speed = 5;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 4:
			enemy1Speed = 6;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 5:
			enemy1Speed = 7;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 6:
			enemy1Speed = 8;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 7:
			enemy1Speed = 9;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 8:
			enemy1Speed = 10;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 9:
			enemy1Speed = 11;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
		case 10:
			enemy1Speed = 12;
			enemy1Total = 3;
			sc0reMult = 1;
			break;
	}
}
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
	    e1x = (Math.random() * 200) + 25;
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