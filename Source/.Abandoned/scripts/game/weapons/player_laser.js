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
function playerLaser(init,engine){
	var x = init.x;
	var y = init.y;
	var direction = "up";
	var speed = 10;
	var speedMult = 1;
	var width = 2;
	var height = 8;
	var exist = true;
	this.move = function(){
		if(this.y>-(engine.height)){
			this.y += speed * speedMult;
		} else {
			exist = false;
		}
	};
	this.draw = function(){
		var laserGradient = context.createLinearGradient(this.x,this.y,this.x,this.y + 20);
		laserGradient.addColorStop(0,'rgba(255,0,0,0.8)');
		laserGradient.addColorStop(1,'rgba(255,0,0,0.2)');
		context.fillStyle = laserGradient;
		context.fillRect(this.x,this.y,width,height);
	},
	this.collision = function(){}
};