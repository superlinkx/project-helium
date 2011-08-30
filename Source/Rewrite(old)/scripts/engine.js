function Background(){
    //begin properties
    //end properties
    //begin methods
    this.draw = function(){
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
    //end methods
}
function Menu(){
    //begin properties
    //end properties
    //begin methods
    //end methods
}
function Player(){
    //begin properties
    //end properties
    //begin methods
    this.draw = function(){
	if (rightKey) px += 5;
	else if (leftKey) px -= 5;
	if (upKey) py -= 5;
	else if (downKey) py += 5;
	this.bounds();
	ctx.drawImage(pSprite, px, py);
    }
    this.bounds = function(){
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
    this.collision = function(){
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
    //end methods
}
function Laser(){
    //begin properties
    //end properties
    //begin methods
    this.draw = function(){
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
    this.move = function(){
	for(var i = 0; i < lasers.length; i++){
		if (lasers[i][1] > -11){
			lasers[i][1] -= 10;
		} else if (lasers[i][1] < -10){
			lasers.splice(i,1);
		}
	}
    }
    this.fire = function(){
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
    //end methods
}
function Controls(){
    //begin properties
    this.x;
    this.y;
    //end properties
    //begin methods
    this.getCursor = function(e){
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
        var cursorPos = new this.cursorPosition(x,y);
        return cursorPos;
    }
    this.cursorPosition = function(x,y){
        this.x = x;
        this.y = y;
    }
    this.keyDown = function(e) {
        if (e.keyCode == 68) rightKey = true;
        else if (e.keyCode == 65) leftKey = true;
        if (e.keyCode == 87) upKey = true;
        else if (e.keyCode == 83) downKey = true;
        if (e.keyCode == 74) laserKey = true;
        if (e.keyCode == 13) enterKey = true;
        if (e.keyCode == 27) pauseGame();
    }
    this.keyUp = function(e) {
        if (e.keyCode == 68) rightKey = false;
        else if (e.keyCode == 65) leftKey = false;
        if (e.keyCode == 87) upKey = false;
        else if (e.keyCode == 83) downKey = false;
        if (e.keyCode == 74) laserKey = false;
        if (e.keyCode == 13) enterKey = false;
    }
    //end methods
}
function Enemy(){
    //begin properties
    this.remove = false;
    //end properties
    //begin methods
    this.init = function(){
        for (var i = 0; i < enemy1Total; i++) {
            e1x = (Math.random() * 200) + 25;
            enemies.push([e1x, e1y, e1w, e1h, enemy1Speed, e1x]);
        }
    }
    function hit(){
        for (var i = 0; i < lasers.length; i++){
            for(var j = 0; j < enemies.length; j++){
                if (lasers[i][0] >= enemies[j][0] && lasers[i][0] <= (enemies[j][0] + e1w) || ((lasers[i][0] + laserWidth) >= enemies[j][0] && (lasers[i][0] + laserWidth) <= (enemies[j][0] + e1w))){
		    if (lasers[i][1] >= enemies[j][1] && lasers[i][1] <= (enemies[j][1] + e1h)){
                        explodeEffect.pause();
                        explodeEffect.currentTime = 0;
                        explodeEffect.play();
                        e1x = (Math.random() * 200) + 25;
                        this.remove = true;
                        enemies.splice(j,1);
			sc0re += (10*scoreMult);
                        laserCount += 1;
			enemies.push([e1x, -45, e1w, e1h, enemy1Speed, e1x]);
		    }
                }
	    }
	    if (this.remove == true){
		lasers.splice(i,1);
		this.remove = false;
            }
	}
    }
    this.draw = function(){
	for (var i = 0; i < enemies.length; i++) {
            ctx.fillStyle = '#f00';
            ctx.fillRect(enemies[i][0], enemies[i][1], e1w, e1h);
        }
    }
    this.move = function(){
	for (var i = 0; i < enemies.length; i++) {
            enemies[i][0] = e1xa*Math.sin((e1xf*enemies[i][1]))+enemies[i][5];
	    if (enemies[i][1] < h) {
                enemies[i][1] += enemies[i][4];
	    } else if (enemies[i][1] > h - 1) {
                enemies[i][1] = -45;
	    }
  	}
    }
    //end methods
}
function Score(){
    //begin properties
    //end properties
    //begin methods
    this.board = function(){
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
    this.updateStorage = function(){
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
    //end methods
}
function Level(){
    this.lvlchecker = function(){
        if (sc0re < 1000){
            this.lvl1();
            lvl = 1;
        }
        if (sc0re >= 1000 && sc0re < 3000){
            this.lvl2();
            lvl = 2;
        }
        if (sc0re >= 3000 && sc0re < 6000 ){
            this.lvl3();
            lvl = 3;
        }
        if (sc0re >= 6000 && sc0re < 10000 ){
            this.lvl4();
            lvl = 4;
        }
        if (sc0re >= 10000 && sc0re < 15000 ){
            this.lvl5();
            lvl = 5;
        }
        if (sc0re >= 15000 && sc0re < 21000 ){
            this.lvl6();
            lvl = 6;
        }
        if (sc0re >= 21000 && sc0re < 28000 ){
            this.lvl7();
            lvl = 7;
        }
        if (sc0re >= 28000 && sc0re < 36000 ){
            this.lvl8();
            lvl = 8;
        }
        if (sc0re >= 36000 && sc0re < 45000 ){
            this.lvl9();
            lvl = 9;
        }
        if (sc0re >= 45000){
            this.lvl10();
            lvl = 10
        }
    }
    this.lvl1 = function(){
        enemy1Speed = 3;
        enemy1Total = 3;
        sc0reMult = 1;
    }
    this.lvl2 = function(){
        enemy1Speed = 4;
        enemy1Total = 3;
        sc0reMult = 2;
    }
    this.lvl3 = function(){
        enemy1Speed = 5;
        enemy1Total = 3;
        sc0reMult = 3;
    }
    this.lvl4 = function(){
        enemy1Speed = 6;
        enemy1Total = 3;
        sc0reMult = 4;
    }
    this.lvl5 = function(){
        enemy1Speed = 7;
        enemy1Total = 3;
        sc0reMult = 5;
    }
    this.lvl6 = function(){
        enemy1Speed = 8;
        enemy1Total = 3;
        sc0reMult = 6;
    }
    this.lvl7 = function(){
        enemy1Speed = 9;
        enemy1Total = 3;
        sc0reMult = 7;
    }
    this.lvl8 = function(){
        enemy1Speed = 10;
        enemy1Total = 3;
        sc0reMult = 8;
    }
    this.lvl9 = function(){
        enemy1Speed = 11;
        enemy1Total = 3;
        sc0reMult = 9;
    }
    this.lvl10 = function(){
        enemy1Speed = 12;
        enemy1Total = 3;
        sc0reMult = 10;
    }
}
function Game(){
    //begin properties
    var background = new Background();
    var control = new Controls();
    var score = new Score();
    var enemy = new Enemy();
    var player = new Player();
    var menu = new Menu();
    var laser = new Laser();
    //end properties
    //begin methods
    this.reset = function(){
        storageCalled = false;
	var enemy_reset_x = 0;
        laserFireTracker = 0;
        laserCount = 5;
	px = (w/2) - 15, py = h - 30, pw = 30, ph = 30;
	for (var i = 0; i < enemies.length; i++){
            enemy_reset_x = (Math.random() * 200) + 25;
	    enemies[i][0] = enemy_reset_x;
            enemies[i][5] = enemy_reset_x;
	    enemies[i][1] = -45;
	}
    }
    this.checkLives = function(){
	lives -= 1;
	if (lives > 0){
            this.reset();
	} else if (lives == 0){
            alive = false;
	}
    }
    this.opening = function(){
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
    this.start = function(){
        gameStarted = true;
        canvas.removeEventListener('click', this.start(), false);
    }
    this.init = function(){
	canvas = document.getElementById("helium");	
	ctx = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
        explodeEffect.volume=0;
        laserEffect.volume=0;
        explodeEffect.play();
        explodeEffect.pause();
        laserEffect.play();
        laserEffect.pause();
        explodeEffect.volume=1;
        laserEffect.volume=1;
	document.addEventListener('keydown', control.keyDown, false);
	document.addEventListener('keyup', control.keyUp, false);
        var topScore = document.getElementById('topScore');
        var lastScore = document.getElementById('lastScore');
        if(localStorage["topScore"]){
            topScore.innerHTML = 'Your Highest Score Ever Was: '+localStorage["topScore"];
        }
        if(localStorage["lastScore"]){
            lastScore.innerHTML = 'Your Latest Score Was: '+localStorage["lastScore"];
        }
        this.loop();
    }
    this.loop = function(){
	ctx.clearRect(0,0,w,h);
	background.draw();
	if (alive && gameStarted && lives > 0){
		enemy.move();
		laser.move();
		enemy.draw();
                laser.fire();
                laser.draw();
		player.draw();
                enemy.hit();
		player.collision();
                level.check();
	}else if (!gameStarted){
            this.opening();
        }
	score.board();
	gameLoop = window.setTimeout(this.loop(), 1000 / FPS);
    }
    this.pause = function(){
        if(!gamePaused){
            window.clearTimeout(gameLoop);
            gamePaused = true;
            ctx.fillStyle = 'rgba(255,255,255,0.7)'
            ctx.fillRect(0,0,w,h);
            ctx.fillStyle = '#f00';
            ctx.font = 'bold 32px Arial';
            ctx.fillText('Paused', w/2-56,h/2);
            ctx.font = 'bold 20px Arial';
            ctx.fillText('Press Esc to Continue',w/2-105,h/2+30)
        }else if(gamePaused){
            gameLoop = window.setTimeout(this.loop(), 1000/FPS);
            gamePaused = false;
        }
    }
    this.end = function(){
	lives = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = '#f00'
        ctx.fillText('Game Over!', (w/2)-55, h/2);
        ctx.fillText('Press Enter to Continue...',(w/2)-110,(h/2)+80);
        ctx.fillRect((w/2)-53, (h/2)+ 10,100,40);
	ctx.fillStyle = '#000';
	ctx.fillText('Continue?', (w/2)-48, (h/2)+35);
        if(!storageCalled) score.updateStorage;
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
    this.newGame = function(e){
	var cursorPos = control.getCursor(e);
        if ((cursorPos.x > (w/2)-53 && cursorPos.x < (w/2)+47 && cursorPos.y > (h/2)+10 && cursorPos.y < (h/2)+50) || e.keyCode == 13){
            alive = true;
            lives = 3;
            sc0re = 0;
            speed = 3;
            reset();
            canvas.removeEventListener('click',continueButton,false);
        }
    }
    //end methods
}