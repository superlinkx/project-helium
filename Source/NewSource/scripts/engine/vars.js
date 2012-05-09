/**
* @license Copyright 2011 Steven Holms <superlinkx@gmail.com>
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
//Root directory var
if(!b) var b = "";
//error and debugging
var err;
//target frames per second
var FPS = 60;
//height/width constants
if(!localStorage["fallback"]) localStorage["fallback"] = "false";
if(localStorage["fallback"]==="false"){
	width = 480;
	height = 800;
}else if(localStorage["fallback"]==="true"){
	width = 360;
	height = 600;
}
var pw = 30,
	ph = 30,
	e1w = 30,
	e1h = 30;
//x-y variables
	x = 0,
	y = 0,
	bgpos = 0,
	px = (width/2)-(pw/2),
	py = (height-ph),
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
var pauseSprite = new Image();
	pauseSprite.src = b+"images/pause.svg";
var restartSprite = new Image();
	restartSprite.src = b+"images/restart.svg";
//keys
var upKey = false,
	downKey = false,
	rightKey = false,
	leftKey = false,
	enterKey = false,
	gamePaused = false,
//enemies
	typeNum,
	type,
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