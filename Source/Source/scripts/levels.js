/**
* @license Copyright 2011 Steven Holms <superlinkx@gmail.com>
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*       http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*/
var lvl1 = new Level([3,4,8,1,"rgb(0,0,0)","rgb(0,255,0)"]);
var lvl2 = new Level([4,5,9,1,"rgb(0,0,0)","rgb(0,0,255)"]);
var lvl3 = new Level([5,6,10,1,"rgb(0,0,0)","rgb(255,0,0)"]);
var lvl4 = new Level([6,7,11,1,"rgb(0,0,0)","rgb(0,255,255)"]);
var lvl5 = new Level([7,8,12,1,"rgb(0,0,0)","rgb(255,255,0)"]);
var lvl6 = new Level([8,9,13,1,"rgb(0,0,0)","rgb(255,0,255)"]);
var lvl7 = new Level([9,10,14,1,"rgb(0,0,0)","rgb(255,255,255)"]);
var lvl8 = new Level([10,11,15,1,"rgb(255,255,255)","rgb(0,0,0)"]);
var lvl9 = new Level([11,12,16,1,"rgb(255,255,255)","rgb(0,255,0)"]);
var lvl10 = new Level([12,13,17,1,"rgb(255,255,255)","rgb(255,0,0)"]);
function Level(params){
	this.enemy1Speed = params[0];
	this.enemy2Speed = params[1];
	this.enemyTotal = params[2];
	this.sc0reMult = params[3];
	this.bgcolor = params[4];
	this.bgline = params[5];
}
function lvlReader(){
	enemy1Speed = currentLevel.enemy1Speed;
	enemy2Speed = currentLevel.enemy2Speed;
	enemyTotal = currentLevel.enemyTotal;
	sc0reMult = currentLevel.sc0reMult;
	bgcolor = currentLevel.bgcolor;
	bgline = currentLevel.bgline;
}
function lvlchecker(){
	switch(enemyKilled){
		case 0: lvl = 1;
			break;
		case 100: lvl = 2;
			break;
		case 200: lvl = 3;
			break;
		case 300: lvl = 4;
			break;
		case 400: lvl = 5;
			break;
		case 500: lvl = 6;
			break;
		case 600: lvl = 7;
			break;
		case 700: lvl = 8;
			break;
		case 800: lvl = 9;
			break;
		case 900: lvl = 10;
			break;
		default: break;
	}
	switch(lvl){
		case 1: currentLevel = lvl1;
				break;
		case 2: currentLevel = lvl2;
				break;
		case 3: currentLevel = lvl3;
				break;
		case 4: currentLevel = lvl4;
				break;
		case 5: currentLevel = lvl5;
				break;
		case 6: currentLevel = lvl6;
				break;
		case 7: currentLevel = lvl7;
				break;
		case 8: currentLevel = lvl8;
				break;
		case 9: currentLevel = lvl9;
				break;
		case 10: currentLevel = lvl10;
				break;
	}
}