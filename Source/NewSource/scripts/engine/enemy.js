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
function Enemy(paths,type,game){
	//Dimensions
	var width = type.width;
	var height = type.height;
	//Sprite
	var sprite = type.sprite;
	//Speed
	var speed = type.speed;
	this.speedMult = type.speedMult;
	//Position
	var x, initx, y, path;
	var totalPaths = paths.totalPaths;
	this.position = function(){
		path = Math.floor(Math.random() * (totalPaths - 1));
		x = (game.width/totalPaths)*path;
		initx = x;
		y = 0
	}
	//Movement
	this.move = function(){
		var values = type.move(initx,x,y,game.width,game.height,speed,this.speedMult);
		x = values["x"];
		y = values["y"];
	};
	//Draw
	this.draw = function(){
		game.context.drawImage(sprite, x, y, width, height);
	}
}