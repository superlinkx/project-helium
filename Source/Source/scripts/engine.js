/**
*	Copyright 2011 Steven Holms <superlinkx@gmail.com>
*	Licensed under the Apache License, Version 2.0 (the "License");
*	you may not use this file except in compliance with the License.
*	You may obtain a copy of the License at
*	http://www.apache.org/licenses/LICENSE-2.0
*	Unless required by applicable law or agreed to in writing, software
*	distributed under the License is distributed on an "AS IS" BASIS,
*	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*	See the License for the specific language governing permissions and
*	limitations under the License.
*/
//Begin Level
//End Level
//Begin Background
function backgroundDraw(){
	if(bgpos==60){
		bgpos = 0;
	}
	ctx.fillStyle = bgcolor;
	ctx.fillRect(0,0,width,height);
	ctx.beginPath();
	ctx.strokeStyle = bgline;
	for(i=60;i<=width;i+=60){
		ctx.moveTo(i,0);
		ctx.lineTo(i,height);
	}
	for(i=bgpos;i<=height;i+=60){
	ctx.moveTo(0,i);
	ctx.lineTo(width,i);
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
	this.draw = function(){
		if(rightKey) this.x += pspeed * speedMult;
		if(leftKey) this.x -= pspeed * speedMult;
		if(upKey) this.y -= pspeed * speedMult;
		if(downKey) this.y += pspeed * speedMult;
		this.bounds();
		ctx.drawImage(pSprite, this.x, this.y, this.w, this.h);
	}
	this.bounds = function(){
		if(this.x > (width-31)) this.x = (width-30);
		if(this.x < 1)	this.x = 0;
		if(this.y > (height-31)) this.y = (height-30);
		if(this.y < 1)	this.y = 0;
	}
	this.collision = function(){
		var pxw = this.x + this.w;
		var pyh = this.y + this.h;
		for(var i = 0; i < enemies.length; i++){
			if((this.x + this.w >= enemies[i].x)&&(this.x <= enemies[i].x + enemies[i].w)&&(this.y <= enemies[i].y + enemies[i].h)&&(this.y + this.h >= enemies[i].y)){
		checkLives();
			}
		}
	}
	this.fire = function(){
		if(laserKey == true && laserTime >= 5 && laserCount > 0){
			lasers.push(new Laser(player.x + (player.w/2 - laserWidth/2), player.y, laserWidth, laserHeight, "player"));
			laserTime = 0;
			laserCount--;
		}
		laserTime += 1;
		if(laserCount < laserLimit && !(laserFireTracker++ % (laserTimeout/speedMult))){
			laserCount++;
		}
	}
}
//End Player
//Begin Enemy
function Enemy(x,y,w,h,speed,type){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = speed;
	this.initx = x;
	this.type = type;
	this.fired = 0;
	this.fire = function(){
		if(!this.fired){
			enemyLasers.push(new Laser(this.x + (this.w/2 - laserWidth/2), this.y, laserWidth, laserHeight, "enemy"))
			this.fired = true;
		}
	}
	this.draw = function(){
		switch (this.type){
			case 1: ctx.drawImage(e1Sprite,this.x,this.y,this.w,this.h);
				break;
			case 2: ctx.drawImage(e2Sprite,this.x,this.y,this.w,this.h);
				break;
			default: ctx.drawImage(e1Sprite,this.x,this.y,this.w,this.h);
				break;
		}
	}
	this.move = function(){
		switch(this.type){
			case 1:
				this.x = e1xa*Math.sin((e1xf*this.y))+this.initx;
				if(this.y <= height){
					this.y += this.speed * speedMult;
				}else if(this.y > height){
					this.y = -45;
				}
				break;
			case 2:
				if(this.y <= height){
					this.y += this.speed * speedMult;
				}else if(this.y > height){
					this.y = -45;
				}
				break;
			default:
				this.x = e1xa*Math.sin((e1xf*this.y))+this.initx;
				if(this.y <= h){
					this.y += this.speed * speedMult;
				}else if(this.y > h){
					this.y = -45;
				}
		}
	}
}
function drawEnemy(){
	for(var i = 0; i < enemies.length; i++){
		enemies[i].draw();
	}
}
function moveEnemy(){
	for(var i = 0; i < enemies.length; i++){
		enemies[i].move();
	}
}
function enemyFire(){
	for(var i = 0; i < enemies.length; i++){
		if(enemies[i].type === 2){
			enemies[i].fire();
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
function randomPath(){
	var random = Math.floor(Math.random() * 19);
	return random;
}
function typeSpeed(type){
	if(type===1) return enemy1Speed;
	else
	if(type===2) return enemy2Speed;
	else
	return enemy1Speed;
}
function Path(path){
	switch(path){
		case 0: pathSize = (width/20)*0;
			break;
		case 1: pathSize = (width/20);
			break;
		case 2: pathSize = (width/20)*2;
			break;
		case 3: pathSize = (width/20)*3;
			break;
		case 4: pathSize = (width/20)*4;
			break;
		case 5: pathSize = (width/20)*5;
			break;
		case 6: pathSize = (width/20)*6;
			break;
		case 7: pathSize = (width/20)*7;
			break;
		case 8: pathSize = (width/20)*8;
			break;
		case 9: pathSize = (width/20)*9;
			break;
		case 10: pathSize = (width/20)*10;
			break;
		case 11: pathSize = (width/20)*11;
			break;
		case 12: pathSize = (width/20)*12;
			break;
		case 13: pathSize = (width/20)*13;
			break;
		case 14: pathSize = (width/20)*14;
			break;
		case 15: pathSize = (width/20)*15;
			break;
		case 16: pathSize = (width/20)*16;
			break;
		case 17: pathSize = (width/20)*17;
			break;
		case 18: pathSize = (width/20)*18;
			break;
		case 19: pathSize = (width/20)*19;
			break;
		default: pathSize = (width/20)*0;
			break;
		}
	return pathSize;
}
//End Enemy
//Begin Hit Tests
function enemyLaserTest(){
	for(var i = 0; i < enemyLasers.length; i++){
		if(enemyLasers[i].x + enemyLasers[i].w >= player.x && enemyLasers[i].x <= player.x + player.w && enemyLasers[i].y >= player.y && enemyLasers[i].y + enemyLasers[i].h <= player.y + player.h){
			checkLives();
			enemyLasers.splice(i,1);
			break;
		}
	}
}
function hitTest(){
	for(var i = 0; i < lasers.length; i++){
		for(var j = 0; j < enemies.length; j++){
			if(lasers[i].x + lasers[i].w >= enemies[j].x && lasers[i].x <= enemies[j].x + enemies[j].w && lasers[i].y <= enemies[j].y + enemies[j].h && lasers[i].y + lasers[i].h >= enemies[j].y){
				enemyKilled += 1;
				enemies.splice(j,1);
				sc0re += (10*sc0reMult);
				path = randomPath();
				type = randomType();
				e1x = Path(path);
				var speed = typeSpeed(type);
				enemies.push(new Enemy(e1x, -45, e1w, e1h, speed, type));
				lasers.splice(i,1);
				break;
			}
		}
	}
}
//End Hit Tests
//Begin Laser
function Laser(x,y,w,h,type){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.type = type;
	this.draw = function(){
		if(this.type==="enemy"){
			var laserGradient = ctx.createLinearGradient(this.x,this.y,this.x,this.y + 20);
			laserGradient.addColorStop(0,'rgba(255,0,0,0.2)');
			laserGradient.addColorStop(1,'rgba(255,0,0,0.8)');
			ctx.fillStyle = laserGradient;
			ctx.fillRect(this.x,this.y,this.w,this.h);
		}
		if(this.type==="player"){
			var laserGradient = ctx.createLinearGradient(this.x,this.y,this.x,this.y + 20);
			laserGradient.addColorStop(0,'rgba(255,0,0,0.8)');
			laserGradient.addColorStop(1,'rgba(255,0,0,0.2)');
			ctx.fillStyle = laserGradient;
			ctx.fillRect(this.x,this.y,this.w,this.h);
		}
	}
	this.move = function(){
		if(this.type==="player"){
			if(this.y >= -10){
				this.y -= laserSpeed * speedMult;
			}else if(this.y < -10){
				lasers.splice(i,1);
			}
		}
		if(this.type==="enemy"){
			if(this.y <= height + 10){
				this.y += laserSpeed * speedMult;
			}else if(this.y > height + 10){
				enemyLasers.splice(i,1);
			}
		}
	}
}
function drawLaser(){
	if(lasers.length){
		for(var i=0; i < lasers.length; i++){
			lasers[i].draw();
		}
	}
	if(enemyLasers.length){
		for(var i=0; i<enemyLasers.length; i++){
			enemyLasers[i].draw();
		}
	}
}
function moveLaser(){
	for(var i = 0; i < lasers.length; i++){
		lasers[i].move();
	}
	for(var i = 0; i < enemyLasers.length; i++){
		enemyLasers[i].move();
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
	if(lives == 0){
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
	player.x = (width/2) - 15, player.y = height - 30, player.w= 30, player.h = 30;
	enemies.splice(0,enemies.length);
	for(i=0;i<enemyTotal;i++){
		path = randomPath();
		type = randomType();
		e1x = Path(path);
		var speed = typeSpeed(type);
		enemies.push(new Enemy(e1x, -45, e1w, e1h, speed, type));
	}
}
//End Engine
//Begin Controls
function keyDown(e){
	e.preventDefault();
	if(e.keyCode == 39) rightKey = true;
	else if(e.keyCode == 37) leftKey = true;
	if(e.keyCode == 38) upKey = true;
	else if(e.keyCode == 40) downKey = true;
	if(e.keyCode == 32) laserKey = true;
	if(e.keyCode == 13) enterKey = true;
	if(e.keyCode == 191) pauseGame();
}
function keyUp(e){
	e.preventDefault();
	if(e.keyCode == 39) rightKey = false;
	else if(e.keyCode == 37) leftKey = false;
	if(e.keyCode == 38) upKey = false;
	else if(e.keyCode == 40) downKey = false;
	if(e.keyCode == 32) laserKey = false;
	if(e.keyCode == 13) enterKey = false;
}
//End Controls
