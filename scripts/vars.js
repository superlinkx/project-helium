/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/

//Root directory var
if(!b) var b = "";
// target frames per second
var	FPS = 30,
//height/width constants 
	w = 240,
	h = 480,
	pw = 30,
	ph = 30,
	e1w = 30,
	e1h = 30;
//x-y variables
	x = 0,
	y = 0,
	bgx = 0,
	bg1y = -480,
	bg2y = -1440,
	px = (w/2)-15,
	py = (h-30),
	e1x = 25,
	e1y = -45,
//images and sprites
	bg1 = new Image();
	bg1.src = b+"images/background.png";
var	bg2 = new Image();
	bg2.src = b+"images/background.png";
var	pSprite = new Image();
	pSprite.src = b+"images/psprite.png";
//keys
var	upKey = false,
	downKey = false,
	rightKey = false,
	leftKey = false,
//enemies
	enemy1Total = 3,
	enemies = [],
	enemy1Speed = 3,
	e1xa = 20,		//amplitude
	e1xf = (2*Math.PI)/480	//frequency
	enemyInitX = 10 	//initial x position
//lasers
	lasersTotal = 9,
	lasers = [],
//scoring
	score = 0,
        scoreMult = 1,
	alive = true,
	lives = 3,
	gameStarted = false,
        lvl = 1,
//canvas element vars
	canvas = null,
	body = null,
	ctx = null;
//enemy init
for (var i = 0; i < enemy1Total; i++) {
    e1x = (Math.random() * 200) + 25;
    enemies.push([e1x, e1y, e1w, e1h, enemy1Speed, enemyInitX]);
}
for (var i = 0; i < enemy1Total; i++) {
    enemies[i][5] = enemies[i][0]
}