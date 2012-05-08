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