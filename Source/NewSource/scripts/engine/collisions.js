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