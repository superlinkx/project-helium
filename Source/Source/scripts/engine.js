/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/
//Begin Level
function getLevelData(){
    var request = new XMLHttpRequest();
    request.open('GET', 'levels.json', false); 
    request.send(null);
    if (request.status == 200)
	eval(request.responseText);
}
//End Level
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
    if (leftKey) px -= 5;
    if (upKey) py -= 5;
    if (downKey) py += 5;
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
        ctx.drawImage(e1Sprite,enemies[i][0],enemies[i][1]);
    }
}
function randomPath(){
    var random = Math.ceil(Math.random() * 20);
    return random;
}
function currentPath(path){
    switch(path){
	case 1: pathSize = (w/20);
	    break;
	case 2: pathSize = (w/20)*2;
	    break;
	case 3: pathSize = (w/20)*3;
	    break;
	case 4: pathSize = (w/20)*4;
	    break;
	case 5: pathSize = (w/20)*5;
	    break;
	case 6: pathSize = (w/20)*6;
	    break;
	case 7: pathSize = (w/20)*7;
	    break;
	case 8: pathSize = (w/20)*8;
	    break;
	case 9: pathSize = (w/20)*9;
	    break;
	case 10: pathSize = (w/20)*10;
	    break;
	case 11: pathSize = (w/20)*11;
	    break;
	case 12: pathSize = (w/20)*12;
	    break;
	case 13: pathSize = (w/20)*13;
	    break;
	case 14: pathSize = (w/20)*14;
	    break;
	case 15: pathSize = (w/20)*15;
	    break;
	case 16: pathSize = (w/20)*16;
	    break;
	case 17: pathSize = (w/20)*17;
	    break;
	case 18: pathSize = (w/20)*18;
	    break;
	case 19: pathSize = (w/20)*19;
	    break;
	case 20: pathSize = (w/20)*20;
	    break;
	default: return err;
    }
    return pathSize;
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
		    enemyKilled += 1;
                    remove = true;
                    enemies.splice(j,1);
		    sc0re += (10*sc0reMult);
		    path = randomPath();
		    e1x = currentPath(path);
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
    if(laserCount < laserLimit && !(laserFireTracker++ % laserTimeout)){
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
    ctx.font = '54px VT323';
    ctx.fillText('Project Helium', w/2 - 150, h/2);
    ctx.font = '36px VT323';
    ctx.fillText('Click to Play', w/2 - 95, h/2 + 50);
    ctx.fillText('Use arrow keys to move', w/2 - 160, h/2 + 90);
    ctx.fillText('Use space to shoot', w/2 - 125, h/2+130);
}
function gameOver(){
    lives = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#f00'
    ctx.fillText('Game Over!', (w/2)-60, h/2);
    ctx.fillText('Press Enter to Continue...',(w/2)-130,(h/2)+80);
    ctx.fillRect((w/2)-65, (h/2)+ 10,120,40);
    ctx.fillStyle = '#000';
    ctx.fillText('Continue?', (w/2)-55, (h/2)+35);
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
function fullscreen(){
    if (document.getElementById("helium").webkitRequestFullScreen){
        document.getElementById("helium").webkitRequestFullScreen();
    }else{
        alert('Browser not supported. You need to install the latest WebKit (for example Chrome 15) in order to use the full-screen API.');
    }
}
//End Menu
//Begin Score
function scoreboard(){
    ctx.font = '26px VT323';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillRect(0,0,w,60)
    ctx.fillStyle = '#f00';
    ctx.fillText('Score: ', 10, 55);
    ctx.fillText(sc0re, 170, 55);
    ctx.fillText('Lives:', 10, 20);
    ctx.fillText(lives, 170, 20);
    ctx.fillText('Level:', (w-170), 20);
    ctx.fillText(lvl, (w-20), 20);
    ctx.fillText('Shots:', (w-170), 55);
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
    enemyKilled = 0;
    lasers.splice(0,lasers.length);
    laserFireTracker = 0;
    laserCount = 4;
    px = (w/2) - 15, py = h - 30, pw = 30, ph = 30;
    enemies.splice(0,enemies.length);
    for(i=0;i<enemy1Total;i++){
	path = randomPath();
	e1x = currentPath(path);
	enemies.push([e1x, -45, e1w, e1h, enemy1Speed, e1x]);
    }
}
function pauseGame(){
    if(!gamePaused){
        window.clearTimeout(game);
        gamePaused = true;
        ctx.fillStyle = 'rgba(255,255,255,0.7)'
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = '#f00';
        ctx.font = '54px VT323';
        ctx.fillText('Paused', w/2-70,h/2);
        ctx.font = '36px VT323';
        ctx.fillText('Press Esc to Continue',w/2-160,h/2+60)
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
//End Engine
//Begin Controls
function keyDown(e) {
    e.preventDefault();
    if (e.keyCode == 39) rightKey = true;
    else if (e.keyCode == 37) leftKey = true;
    if (e.keyCode == 38) upKey = true;
    else if (e.keyCode == 40) downKey = true;
    if (e.keyCode == 32) laserKey = true;
    if (e.keyCode == 13) enterKey = true;
    if (e.keyCode == 27) pauseGame();
}
function keyUp(e) {
    e.preventDefault();
    if (e.keyCode == 39) rightKey = false;
    else if (e.keyCode == 37) leftKey = false;
    if (e.keyCode == 38) upKey = false;
    else if (e.keyCode == 40) downKey = false;
    if (e.keyCode == 32) laserKey = false;
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