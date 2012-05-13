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
function Player(type,game){
	//Position
	var x = type.x;
	var y = type.y;
	//Dimensions
	var width = type.width;
	var height = type.height;
	//Sprite
	var sprite = type.sprite;
	//Speed
	var speed = type.speed;
	this.speedMult = type.speedMult;
	//Key Inits
	var upKey = false;
	var downKey = false;
	var rightKey = false;
	var leftKey = false;
	var laserKey = false;
	var enterKey = false
	var pauseKey = false;
	//Movement
	this.move = function(){
		if(rightKey) x += speed * this.speedMult;
		if(leftKey) x -= speed * this.speedMult;
		if(upKey) y -= speed * this.speedMult;
		if(downKey) y += speed * this.speedMult;
	};
	//Draw
	this.draw = function(){
		game.context.drawImage(sprite, x, y, width, height);
	}
	//Bounds
	this.bounds = function(){
		if(x > (game.width-(width+1))) x = (game.width-width);
		if(x < 1)	x = 0;
		if(y > (game.height-(height+1))) y = (game.height-height);
		if(y < 1)	y = 0;
	};
	//Collision
	this.collision = function(){
		
	};
	//Controls
	this.keyDown = function(e){
		e.preventDefault();
		if(e.keyCode == 39) rightKey = true;
		else if(e.keyCode == 37) leftKey = true;
		if(e.keyCode == 38) upKey = true;
		else if(e.keyCode == 40) downKey = true;
		if(e.keyCode == 32){
			laserKey = true;
			type.fire(x,y);
		}
		if(e.keyCode == 13) enterKey = true;
		if(e.keyCode == 191) pauseKey = true;
	}
	this.keyUp = function(e){
		e.preventDefault();
		if(e.keyCode == 39) rightKey = false;
		else if(e.keyCode == 37) leftKey = false;
		if(e.keyCode == 38) upKey = false;
		else if(e.keyCode == 40) downKey = false;
		if(e.keyCode == 32) laserKey = false;
		if(e.keyCode == 13) enterKey = false;
		if(e.keyCode == 191) pauseKey = false;
	}
}