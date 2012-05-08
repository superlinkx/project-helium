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
function Enemy(x,y,w,h,speed,type){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = speed;
	this.initx = x;
	this.type = type;
	this.fired = 0;
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
	}}