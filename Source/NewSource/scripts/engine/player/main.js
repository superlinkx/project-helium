/**
* Copyright 2011 Steven Holms <superlinkx@gmail.com>
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