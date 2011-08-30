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
	bgpos = 0,
	px = (w/2)-(pw/2),
	py = (h-ph),
	e1x = 25,
	e1y = -45,
//sprites and sounds
        laserEffect = new Audio(b+"sound/laserpulse.wav"),
        explodeEffect = new Audio(b+"sound/explode.wav");
	var pSprite = new Image();
	pSprite.src = b+"images/heliumclass1.png";
//keys
    var	upKey = false,
	downKey = false,
	rightKey = false,
	leftKey = false,
        enterKey = false,
        gamePaused = false,
//enemies
	enemies = [],
	enemy1Speed = 3,
	enemy1Total = 3,
	e1xa = 50,		//amplitude
	e1xf = (2*Math.PI)/240,	//frequency
//lasers
	lasers = [],
        laserKey = false,
        laserTime = 0,
        laserWidth = 4,
        laserCount = 4,
        laserLimit = 4,
        laserFireTracker = 0,
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
	ctx = null;