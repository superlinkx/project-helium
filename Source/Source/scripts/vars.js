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
//Root directory var
if(!b) var b = "";
//error and debugging
var err;
// target frames per second
var FPS = 60;
//height/width constants 
var w = 480;
var h = 800;
var pw = 30,
    ph = 30,
    e1w = 30,
    e1h = 30;
//x-y variables
    x = 0,
    y = 0,
    bgpos = 0,
    px = (w/2)-(pw/2),
    py = (h-ph),
    e1x = 25,
    e1y = -45,
//level variables
    bgcolor = "rgb(0,0,0)",
    bgline = "rgb(0,255,0)",
	lvl1 = null,
	lvl2 = null,
	lvl3 = null,
	lvl4 = null,
	lvl5 = null,
	lvl6 = null,
	lvl7 = null,
	lvl8 = null,
	lvl9 = null,
	lvl10 = null,
//sprites and sounds
    pSprite = new Image();
    pSprite.src = b+"images/heliumclass1.svg";
var e1Sprite = new Image();
    e1Sprite.src = b+"images/enemy1.svg";
var e2Sprite = new Image();
    e2Sprite.src = b+"images/enemy2.svg";
//keys
var upKey = false,
    downKey = false,
    rightKey = false,
    leftKey = false,
    enterKey = false,
    gamePaused = false,
//enemies
    enemies = [],
    enemyLasers = [],
    enemyKilled = 0,
    enemy1Speed = 1,
    enemy2Speed = 2,
    enemyLaserTime = 0,
    enemyTotal = 8,
    path = null,
    pathSize = null,
    e1xa = 50,		//amplitude
    e1xf = (2*Math.PI)/240,	//frequency
//player
	pspeed = 5;
//lasers
    lasers = [],
    laserKey = false,
    laserTime = 0,
    laserWidth = 4,
	laserHeight = 20,
    laserCount = 4,
    laserLimit = 4,
    laserFireTracker = 0,
    laserTimeout = 20,
	laserSpeed = 10,
//scoring
    sc0re = 0,
    sc0reMult = 1,
    alive = true,
    lives = 3,
    gameStarted = false,
    lvl = 1,
    storageCalled = false,
//canvas element vars
    canvas = null,
    body = null,
    ctx = null,
//fallback
	fallback = false,
	speedMult = 1;