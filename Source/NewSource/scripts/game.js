/**
* 	Copyright 2011 Steven Holms <superlinkx@gmail.com>
*
*	MIT License:
*	
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
* is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
* OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function init(){
	canvas = document.getElementById('helium');	
	ctx = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
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
	lvl_init();
	gameLoop();
}
function gameLoop(){
	ctx.clearRect(0,0,w,h);
	backgroundDraw();
	if (enterKey){
		gameStart();
	}
	if (!gameStarted){
		intro();
	}
	if (alive && gameStarted && lives > 0){
		lvlchecker();
		lvlReader();
		moveEnemy();
		moveLaser();
		moveEnemyLaser();
		drawLaser();
        drawEnemy();
		drawEnemyLaser();
		playerDraw();
		enemyFire();
		laserFire();
		shipCollision();
		enemyLaserTest();
        hitTest();
	}
	if (!alive){
		gameOver();
	}
	scoreboard();
	game = window.setTimeout("gameLoop()", 1000 / FPS);
}
window.onload = init;