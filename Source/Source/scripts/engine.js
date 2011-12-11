/**
* Copyright 2011 Steven Holms <superlinkx@gmail.com>
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
//Begin Level
//End Level
//Begin Background
function backgroundDraw(){
    if(bgpos==60){
        bgpos = 0;
    }
    ctx.fillStyle = bgcolor;
    ctx.fillRect(0,0,w,h);
    ctx.beginPath();
    ctx.strokeStyle = bgline;
    for(i=60;i<=w;i+=60){
        ctx.moveTo(i,0);
		ctx.lineTo(i,h);
    }
    for(i=bgpos;i<=h;i+=60){
        ctx.moveTo(0,i);
		ctx.lineTo(w,i);
    }
    ctx.stroke();
    bgpos+=1;
}
//End Background
//Begin Player
function Player(x,y){
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
}
function playerDraw(){
    if (rightKey) player.x += pspeed * speedMult;
    if (leftKey) player.x -= pspeed * speedMult;
    if (upKey) player.y -= pspeed * speedMult;
    if (downKey) player.y += pspeed * speedMult;
    playerBounds();
    ctx.drawImage(pSprite, player.x, player.y);
}

function playerBounds(){
    if (player.x > (w-31)){
    	player.x = (w-30);
    }
    if (player.x < 1){
    	player.x = 0;
    }
    if(player.y > (h-31)){
    	player.y = (h-30);
    }
    if (player.y < 1){
    	player.y = 0;
    }
}
function shipCollision(){
    var pxw = player.x + player.w,
    pyh = player.y + player.h;
    for (var i = 0; i < enemies.length; i++){
        if((player.x >= enemies[i].x && player.x <= (enemies[i].x + enemies[i].w)) || ((player.x + player.w) >= enemies[i].x && (player.x + player.w) <= (enemies[i].x + enemies[i].w))){
            if((player.y >= enemies[i].y && player.y <= (enemies[i].y + enemies[i].h)) || ((player.y + player.h) >= enemies[i].y && (player.y + player.h) <= (enemies[i].y + enemies[i].h))){
                checkLives();
            }
        }
    }
}
//End Player
//Begin Enemy
function Enemy(x,y,w,h,speed,initx,type){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.initx = initx;
    this.type = type;
    this.fired = 0;
}
function drawEnemy(){
    for (var i = 0; i < enemies.length; i++) {
		switch (enemies[i].type){
		    case 1: ctx.drawImage(e1Sprite,enemies[i].x,enemies[i].y);
			    break;
		    case 2: ctx.drawImage(e2Sprite,enemies[i].x,enemies[i].y);
			    break;
		    default: ctx.drawImage(e1Sprite,enemies[i].x,enemies[i].y);
		}
    }
}
function enemyFire(){
    for (var i = 0; i < enemies.length; i++) {
		switch (enemies[i].type){
		    case 1: break;
		    case 2:	if(!enemies[i].fired){
				enemyLasers.push(new Laser(enemies[i].x + (enemies[i].w/2 - laserWidth/2), enemies[i].y, laserWidth, 20));
				enemies[i].fired = 1;
				break;
				}
		    default: break;
		}
    } 
}
function drawEnemyLaser(){
    if (enemyLasers.length){
		for (var i=0; i < enemyLasers.length; i++){
		    var laserGradient = ctx.createLinearGradient(enemyLasers[i].x,enemyLasers[i].y,enemyLasers[i].x,enemyLasers[i].y + 20);
		    laserGradient.addColorStop(0,'rgba(255,0,0,0.2)');
            laserGradient.addColorStop(1,'rgba(255,0,0,0.8)')
            ctx.fillStyle = laserGradient;
		    ctx.fillRect(enemyLasers[i].x,enemyLasers[i].y,enemyLasers[i].w,enemyLasers[i].h);
		}
    }
}
function moveEnemyLaser(){
    for(var i = 0; i < enemyLasers.length; i++){
		enemyLasers[i].y += laserSpeed * speedMult;
		if (enemyLasers[i].y > 810){
		    enemyLasers.splice(i,1);
		}
    }
}
function randomType(){
    var random = Math.ceil(Math.random() * 2);
    if(random == 0){
		random = 1;
    }
    return random;
}
function typeSpeed(type){
    switch(type){
		case 1: return enemy1Speed;
			break;
		case 2: return enemy2Speed;
			break;
		default: return enemy1Speed;
			break;
    }
}
function randomPath(){
    var random = Math.ceil(Math.random() * 20);
    return random;
}
function currentPath(path){
    switch(path){
		case 1: pathSize = (w/20);
		    break;
		case 2: pathSize = (w/20)*2;
		    break;
		case 3: pathSize = (w/20)*3;
		    break;
		case 4: pathSize = (w/20)*4;
		    break;
		case 5: pathSize = (w/20)*5;
		    break;
		case 6: pathSize = (w/20)*6;
		    break;
		case 7: pathSize = (w/20)*7;
		    break;
		case 8: pathSize = (w/20)*8;
		    break;
		case 9: pathSize = (w/20)*9;
		    break;
		case 10: pathSize = (w/20)*10;
		    break;
		case 11: pathSize = (w/20)*11;
		    break;
		case 12: pathSize = (w/20)*12;
		    break;
		case 13: pathSize = (w/20)*13;
		    break;
		case 14: pathSize = (w/20)*14;
		    break;
		case 15: pathSize = (w/20)*15;
		    break;
		case 16: pathSize = (w/20)*16;
		    break;
		case 17: pathSize = (w/20)*17;
		    break;
		case 18: pathSize = (w/20)*18;
		    break;
		case 19: pathSize = (w/20)*19;
		    break;
		case 20: pathSize = (w/20)*20;
		    break;
		default: return err;
    }
    return pathSize;
}
function moveEnemy(){
    for (var i = 0; i < enemies.length; i++) {
		switch(enemies[i].type){
		    case 1:
				enemies[i].x = e1xa*Math.sin((e1xf*enemies[i].y))+enemies[i].initx;
				if (enemies[i].y < h) {
				    enemies[i].y += enemies[i].speed * speedMult;
				} else if (enemies[i].y > h - 1) {
				    enemies[i].y = -45;
				}
				break;
			case 2:
				if (enemies[i].y < h){
					enemies[i].y += enemies[i].speed * speedMult;
				} else if (enemies[i].y > h - 1){
				    enemies[i].y = -45;
				}
				break;
			default:
				enemies[i].x = e1xa*Math.sin((e1xf*enemies[i].y))+enemies[i].initx;
				if (enemies[i].y < h) {
				    enemies[i].y += enemies[i].speed * speedMult;
				} else if (enemies[i].y > h - 1) {
				    enemies[i].y = -45;
				}
		}
    }
}
function enemyLaserTest(){
    var remove = false;
    for (var i = 0; i < enemyLasers.length; i++){
        if (enemyLasers[i].x >= player.x && enemyLasers[i].x <= (player.x + player.w) || ((enemyLasers[i].x + enemyLasers[i].w) >= player.x && (enemyLasers[i].x + enemyLasers[i].w) <= (player.x + player.w))){
		    if (enemyLasers[i].y >= player.y && enemyLasers[i].y <= (player.y + player.h)){
				remove = true;
				checkLives();
		    }
		}
		if (remove == true){
		    enemyLasers.splice(i,1);
		    remove = false;
		}
    }
}
function hitTest(){
    var remove = false;
    for (var i = 0; i < lasers.length; i++){
		for(var j = 0; j < enemies.length; j++){
		    if (lasers[i].x >= enemies[j].x && lasers[i].x <= (enemies[j].x + enemies[j].w) || ((lasers[i].x + lasers[i].w) >= enemies[j].x && (lasers[i].x + lasers[i].w) <= (enemies[j].x + enemies[j].w))){
				if (lasers[i].y >= enemies[j].y && lasers[i].y <= (enemies[j].y + enemies[j].h)){
					enemyKilled += 1;
					remove = true;
					enemies.splice(j,1);
					sc0re += (10*sc0reMult);
					path = randomPath();
					e1x = currentPath(path);
					type = randomType();
					var speed = typeSpeed(type);
					enemies.push(new Enemy(e1x, -45, e1w, e1h, speed, e1x, type));
				}
			}
		}
		if (remove == true){
		    lasers.splice(i,1);
		    remove = false;
		}
    }
}
//End Enemy
//Begin Laser
function Laser(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
function drawLaser(){
    if (lasers.length){
		for (var i=0; i < lasers.length; i++){
		    var laserGradient = ctx.createLinearGradient(lasers[i].x,lasers[i].y,lasers[i].x,lasers[i].y + 20);
		    laserGradient.addColorStop(0,'rgba(255,0,0,0.8)');
            laserGradient.addColorStop(1,'rgba(255,0,0,0.2)');
            ctx.fillStyle = laserGradient;
			ctx.fillRect(lasers[i].x,lasers[i].y,lasers[i].w,lasers[i].h);
		}
    }
}
function laserFire(){
    if(laserKey == true && laserTime >= 5 && laserCount > 0){
        lasers.push(new Laser(player.x + (player.w/2 - laserWidth/2), player.y, laserWidth, 20));
        laserTime = 0;
        laserCount--;
    }
    laserTime += 1;
    if(laserCount < laserLimit && !(laserFireTracker++ % laserTimeout)){
        laserCount++;
    }
    
}
function moveLaser(){
    for(var i = 0; i < lasers.length; i++){
		if (lasers[i].y > -11){
		    lasers[i].y -= laserSpeed * speedMult;
		} else if (lasers[i].y < -10){
		    lasers.splice(i,1);
		}
    }
}
//End Laser
//Begin Menu
//End Menu
//Begin Score
//End Score
//Begin Engine
function checkLives(){
    lives -= 1;
	reset();
    if (lives == 0){
		alive = false;
    }
}
function reset(){
    storageCalled = false;
    lasers.splice(0,lasers.length);
	enemyLasers.splice(0,lasers.length);
	enemyLasers.length = 0;
    laserFireTracker = 0;
    laserCount = 4;
    player.x = (w/2) - 15, player.y = h - 30, player.w = 30, player.h = 30;
    enemies.splice(0,enemies.length);
    for(i=0;i<enemyTotal;i++){
		path = randomPath();
		e1x = currentPath(path);
		type = randomType();
		var speed = typeSpeed(type);
		enemies.push(new Enemy(e1x, -45, e1w, e1h, speed, e1x, type));
    }
}
//End Engine
//Begin Controls
function keyDown(e) {
    e.preventDefault();
    if (e.keyCode == 39) rightKey = true;
    else if (e.keyCode == 37) leftKey = true;
    if (e.keyCode == 38) upKey = true;
    else if (e.keyCode == 40) downKey = true;
    if (e.keyCode == 32) laserKey = true;
    if (e.keyCode == 13) enterKey = true;
    if (e.keyCode == 191) pauseGame();
}
function keyUp(e) {
    e.preventDefault();
    if (e.keyCode == 39) rightKey = false;
    else if (e.keyCode == 37) leftKey = false;
    if (e.keyCode == 38) upKey = false;
    else if (e.keyCode == 40) downKey = false;
    if (e.keyCode == 32) laserKey = false;
    if (e.keyCode == 13) enterKey = false;
}
//End Controls