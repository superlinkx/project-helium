/*
*@preserve Copyright 2011 Steven Holms <superlinkx@gmail.com>
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*       http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
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
		moveEnemyLaser();
		drawEnemy();
                laserFire();
                drawLaser();
		enemyFire();
		drawEnemyLaser();		
		playerDraw();
                hitTest();
		enemyLaserTest();
		shipCollision();
	}
	if (!alive){
		gameOver();
	}
	scoreboard();
	game = window.setTimeout("gameLoop()", 1000 / FPS);
}
window.onload = init;