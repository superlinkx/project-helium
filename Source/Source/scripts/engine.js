/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/
var level = new Level();
//Begin Background
function backgroundDraw(){
    if(bgpos==50){
        bgpos = 0;
    }
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = 'rgb(0,255,0)';
    for(i=50;i<=w;i+=50){
        ctx.fillRect(i,0,1,h);
    }
    for(i=bgpos-50;i<=h;i+=50){
        ctx.fillRect(0,i,w,1);
    }
    bgpos+=1;
}
//End Background
//Begin Player
function playerDraw(){
	if (rightKey) px += 5;
	else if (leftKey) px -= 5;
	if (upKey) py -= 5;
	else if (downKey) py += 5;
	playerBounds();
	ctx.drawImage(pSprite, px, py);
}

function playerBounds(){
	if (px > (w-31)){
		px = (w-30);
	}
	if (px < 1){
		px = 0;
	}
	if(py > (h-31)){
		py = (h-30);
	}
	if (py < 1){
		py = 0;
	}
}
function shipCollision(){
	var pxw = px + pw,
	    pyh = py + ph;
	for (var i = 0; i < enemies.length; i++){
	    if((px >= enemies[i][0] && px <= (enemies[i][0] + e1w)) || ((px + pw) >= enemies[i][0] && (px + pw) <= (enemies[i][0] + e1w))){
                if((py >= enemies[i][1] && py <= (enemies[i][1] + e1h)) || ((py + ph) >= enemies[i][1] && (py + ph) <= (enemies[i][1] + e1h))){
                    explodeEffect.pause();
                    explodeEffect.currentTime=0;
                    explodeEffect.play();
                    checkLives();
                }
            }
	}
}
//End Player
//Begin Enemy
function drawEnemy1(){
	for (var i = 0; i < enemies.length; i++) {
    	ctx.fillStyle = '#f00';
    	ctx.fillRect(enemies[i][0], enemies[i][1], e1w, e1h);
  }
}

function moveEnemy1(){
	for (var i = 0; i < enemies.length; i++) {
		enemies[i][0] = e1xa*Math.sin((e1xf*enemies[i][1]))+enemies[i][5];
		if (enemies[i][1] < h) {
			enemies[i][1] += enemies[i][4];
		} else if (enemies[i][1] > h - 1) {
			enemies[i][1] = -45;
		}
  	}
}
function hitTest(){
	var remove = false;
	for (var i = 0; i < lasers.length; i++){
		for(var j = 0; j < enemies.length; j++){
                    if (lasers[i][0] >= enemies[j][0] && lasers[i][0] <= (enemies[j][0] + e1w) || ((lasers[i][0] + laserWidth) >= enemies[j][0] && (lasers[i][0] + laserWidth) <= (enemies[j][0] + e1w))){
			if (lasers[i][1] >= enemies[j][1] && lasers[i][1] <= (enemies[j][1] + e1h)){
                            explodeEffect.pause();
                            explodeEffect.currentTime = 0;
                            explodeEffect.play();
                            e1x = (Math.random() * 200) + 25;
                            remove = true;
                            enemies.splice(j,1);
			    sc0re += (10*sc0reMult);
                            laserCount += 1;
			    enemies.push([e1x, -45, e1w, e1h, enemy1Speed, e1x]);
			}
                    }
		}
		if (remove == true){
			lasers.splice(i,1);
			remove = false;
		}
	}
}
//End Enemy
//Begin Laser
function drawLaser(){
	if (lasers.length){
		for (var i=0; i < lasers.length; i++){
                        var laserGradient = ctx.createLinearGradient(lasers[i][0],lasers[i][1],lasers[i][0],lasers[i][1] + 20);
			laserGradient.addColorStop(0,'rgba(255,0,0,0.8)');
                        laserGradient.addColorStop(1,'rgba(255,0,0,0.2)')
                        ctx.fillStyle = laserGradient;
			ctx.fillRect(lasers[i][0],lasers[i][1],lasers[i][2],lasers[i][3]);
		}
	}
}
function laserFire(){
    if(laserKey == true && laserTime >= 5 && laserCount > 0){
        laserEffect.pause();
        laserEffect.currentTime=0;
        laserEffect.play();
        lasers.push([px + (pw/2 - laserWidth/2), py, laserWidth, 20]);
        laserTime = 0;
        laserCount--;
    }
    laserTime += 1;
    if(laserCount < laserLimit && !(laserFireTracker++ % 50)){
        laserCount++;
    }
    
}
function moveLaser(){
    for(var i = 0; i < lasers.length; i++){
	if (lasers[i][1] > -11){
	    lasers[i][1] -= 10;
	} else if (lasers[i][1] < -10){
	    lasers.splice(i,1);
	}
    }
}
//End Laser
//Begin Menu
function intro(){
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#f00';
    ctx.font = 'bold 32px Arial';
    ctx.fillText('Project Helium', w/2 - 110, h/2);
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Click to Play', w/2 -56, h/2 + 30);
    ctx.fillText('Use WASD to move', w/2-100, h/2 + 60);
    ctx.fillText('Use the j key to shoot', w/2-100, h/2+90);
}
function gameOver(){
    lives = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#f00'
    ctx.fillText('Game Over!', (w/2)-55, h/2);
    ctx.fillText('Press Enter to Continue...',(w/2)-110,(h/2)+80);
    ctx.fillRect((w/2)-53, (h/2)+ 10,100,40);
    ctx.fillStyle = '#000';
    ctx.fillText('Continue?', (w/2)-48, (h/2)+35);
    if(!storageCalled) updateStorage();
	canvas.addEventListener('click',continueButton,false);
    if(enterKey){
        alive = true;
        lives = 3;
        sc0re = 0;
        speed = 3;
        reset();
        canvas.removeEventListener('click',continueButton,false);
    }
}
//End Menu
//Begin Score
function scoreboard(){
	ctx.font = 'bold 18px Arial';
	ctx.fillStyle = 'rgba(255,255,255,0.8)';
	ctx.fillRect(0,0,w,60)
	ctx.fillStyle = '#f00';
	ctx.fillText('Score: ', 10, 55);
	ctx.fillText(sc0re, 70, 55);
	ctx.fillText('Lives:', 10, 30);
	ctx.fillText(lives, 68, 30);
        ctx.fillText('Level:', (w-80), 30);
	ctx.fillText(lvl, (w-20), 30);
        ctx.fillText('Shots:', (w-80), 55);
        ctx.fillText(laserCount, (w-20), 55);
}
//End Score
//Begin Engine
function checkLives(){
	lives -= 1;
	if (lives > 0){
		reset();
	} else if (lives == 0){
		alive = false;
	}
}
function reset(){
        storageCalled = false;
	var enemy_reset_x = 0;
        laserFireTracker = 0;
        laserCount = 4;
	px = (w/2) - 15, py = h - 30, pw = 30, ph = 30;
	for (var i = 0; i < enemies.length; i++){
            enemy_reset_x = (Math.random() * 200) + 25;
	    enemies[i][0] = enemy_reset_x;
            enemies[i][5] = enemy_reset_x;
	    enemies[i][1] = -45;
	}
}
function pauseGame(){
    if(!gamePaused){
        window.clearTimeout(game);
        gamePaused = true;
        ctx.fillStyle = 'rgba(255,255,255,0.7)'
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = '#f00';
        ctx.font = 'bold 32px Arial';
        ctx.fillText('Paused', w/2-56,h/2);
        ctx.font = 'bold 20px Arial';
        ctx.fillText('Press Esc to Continue',w/2-105,h/2+30)
    }else if(gamePaused){
        game = window.setTimeout(gameLoop, 1000/FPS);
        gamePaused = false;
    }
}
function gameStart(){
    gameStarted = true;
    canvas.removeEventListener('click', gameStart, false);
}
function updateStorage(){
    if(localStorage["topScore"]){
        if(parseInt(parseFloat(localStorage["topScore"])) < sc0re){
            localStorage["topScore"] = sc0re;
        }
    }else{
        localStorage["topScore"] = sc0re;
    }
    localStorage["lastScore"] = sc0re;
    var topScore = document.getElementById('topScore');
    var lastScore = document.getElementById('lastScore');
    topScore.innerHTML = 'Your Highest Score Ever Was: '+localStorage["topScore"];
    lastScore.innerHTML = 'Your Latest Score Was: '+localStorage["lastScore"];
    storageCalled = true;
}
function Level(){
    this.enemy1Speed;
    this.enemy1Total;
    this.sc0reMult;
}
//End Engine
//Begin Controls
function keyDown(e) {
    if (e.keyCode == 68) rightKey = true;
    else if (e.keyCode == 65) leftKey = true;
    if (e.keyCode == 87) upKey = true;
    else if (e.keyCode == 83) downKey = true;
    if (e.keyCode == 74) laserKey = true;
    if (e.keyCode == 13) enterKey = true;
    if (e.keyCode == 27) pauseGame();
}
function keyUp(e) {
    if (e.keyCode == 68) rightKey = false;
    else if (e.keyCode == 65) leftKey = false;
    if (e.keyCode == 87) upKey = false;
    else if (e.keyCode == 83) downKey = false;
    if (e.keyCode == 74) laserKey = false;
    if (e.keyCode == 13) enterKey = false;
}
function continueButton(e){
    var cursorPos = getCursorPos(e);
    if ((cursorPos.x > (w/2)-53 && cursorPos.x < (w/2)+47 && cursorPos.y > (h/2)+10 && cursorPos.y < (h/2)+50) || e.keyCode == 13){
	alive = true;
	lives = 3;
        sc0re = 0;
        speed = 3;
	reset();
	canvas.removeEventListener('click',continueButton,false);
    }
}
function getCursorPos(e){
    var x;
    var y;
    if (e.pageX || e.pageY){
	x = e.pageX;
	y = e.pageY;
    }else{
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    	y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    var cursorPos = new cursorPosition(x,y);
    return cursorPos;
}
function cursorPosition(x,y){
    this.x = x;
    this.y = y;
}
//End Controls