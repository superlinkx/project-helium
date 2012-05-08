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
function checkLives(){
	lives -= 1;
	reset();
	if(lives == 0){
		alive = false;
	}
}