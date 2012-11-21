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
function PlayerType1(engine){
	var x = 225;
	var y = 770;
	var width = 30;
	var height = 30;
	var speed = 5;
	var speedMult = 1;
	var sprite = new Image();
		sprite.src = global_path+"images/heliumclass1.svg";
	//Key Inits
	var upKey = false;
	var downKey = false;
	var rightKey = false;
	var leftKey = false;
	var laserKey = false;
	var enterKey = false
	var pauseKey = false;
	var weapons = [];
	this.move = function(){
		if(rightKey) x += speed * speedMult;
		if(leftKey) x -= speed * speedMult;
		if(upKey) y -= speed * speedMult;
		if(downKey) y += speed * speedMult;
		if(laserKey) this.fire(x,y);
	}
	this.getCoords = function(){
				console.log("You're X is: "+x);
				console.log("You're Y is: "+y);
	};
	this.draw = function(){
		engine.context.drawImage(sprite, x, y, width, height);
	};
	this.bounds = function(){
		if(x > (engine.width-(width+1))) x = (engine.width-width);
		if(x < 1)	x = 0;
		if(y > (engine.height-(height+1))) y = (engine.height-height);
		if(y < 1)	y = 0;
	};
	this.fire = function(x,y){
		var init = {};
		init["x"] = x;
		init["y"] = y;
		weapons.push(new Weapon(init,engine));
	}
	//Controls
	this.keyDown = function(e){
		e.preventDefault();
		if(e.keyCode == 39) rightKey = true;
		else if(e.keyCode == 37) leftKey = true;
		if(e.keyCode == 38) upKey = true;
		else if(e.keyCode == 40) downKey = true;
		if(e.keyCode == 32) laserKey = true;
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
};
//PlayerType1.prototype = new Player();