/**
*	Copyright 2011 Steven Holms <superlinkx@gmail.com>
*	Licensed under the Apache License, Version 2.0 (the "License");
*	you may not use this file except in compliance with the License.
*	You may obtain a copy of the License at
*	http://www.apache.org/licenses/LICENSE-2.0
*	Unless required by applicable law or agreed to in writing, software
*	distributed under the License is distributed on an "AS IS" BASIS,
*	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*	See the License for the specific language governing permissions and
*	limitations under the License.
*/
function intro(){
	ctx.fillStyle = 'rgba(255,255,255,0.7)';
	ctx.fillRect(0,0,width,height);
	ctx.fillStyle = '#f00';
	ctx.font = '54px "Times New Roman"';
	ctx.fillText('Project Helium', width/2 - 160, height/2);
	ctx.font = '36px "Times New Roman"';
	ctx.fillText('Press Enter to Play', width/2 - 130, height/2 + 50);
	ctx.fillText('Use arrow keys to move', width/2 - 175, height/2 + 90);
	ctx.fillText('Use space to shoot', width/2 - 130, height/2+130);
}
function gameOver(){
	lives = 0;
	ctx.fillStyle = 'rgba(255,255,255,0.7)';
	ctx.fillRect(0,0,width,height);
	ctx.fillStyle = '#f00'
	ctx.fillText('Game Over!', (width/2)-63, height/2);
	ctx.fillText('Press Enter to Continue...',(width/2)-133,(height/2)+80);
	if(!storageCalled) updateStorage();
	if(enterKey){
		restartGame();
	}
}
function fullscreen(){
	if(document.getElementById("canvasContainer").webkitRequestFullScreen){
		document.getElementById("canvasContainer").webkitRequestFullScreen();
	}else{
		alert('Browser not supported. You need to install the latest WebKit Browser (for example Chrome 15) in order to use the full-screen API.');
	}
}
function scoreboard(){
	ctx.font = '26px "Times New Roman"';
	ctx.fillStyle = 'rgba(255,255,255,0.8)';
	ctx.fillRect(0,0,width,60)
	ctx.fillStyle = '#f00';
	ctx.fillText('Score: ', 10, 55);
	ctx.fillText(sc0re, 100, 55);
	ctx.fillText('Lives:', 10, 20);
	ctx.fillText(lives, 100, 20);
	ctx.fillText('Level:', (width-100), 20);
	if(lvl < 10) ctx.fillText(lvl, (width-20), 20);
	if(lvl >= 10) ctx.fillText(lvl, (width-30), 20);
	ctx.fillText('Shots:', (width-100), 55);
	ctx.fillText(laserCount,(width-20),	55);
}
function pauseGame(){
	if(gamePaused){
		game = window.setTimeout(gameLoop, 1000/FPS);
		gamePaused = false;
	}else{
		window.clearTimeout(game);
		gamePaused = true;
		ctx.fillStyle = 'rgba(255,255,255,0.7)';
		ctx.fillRect(0,0,width,height);
		ctx.fillStyle = '#f00';
		ctx.font = '54px "Times New Roman"';
		ctx.fillText('Paused', width/2-70,height/2);
		ctx.font = '36px "Times New Roman"';
		ctx.fillText('Press / to Continue',width/2-130,height/2+60)
	}
}
function restartGame(){
	alive = true;
	lives = 3;
	sc0re = 0;
	enemyKilled = 0
	enemy1Speed = 1;
	enemy2Speed = 2;
	reset();
}
function gameStart(){
	gameStarted = true;
	reset();
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
function toggle_fallback(){
	if(localStorage["fallback"]==="false"){
		width = 360;
		height = 600;
		canvas.width = width;
		canvas.height = height;
		$("#canvasContainer").css("height",height);
		$("#canvasContainer").css("width",width);
		$("#fallback").text("HD Version");
		reset();
		localStorage["fallback"] = "true";
	}else if(localStorage["fallback"]==="true"){
		width = 480;
		height = 800;
		canvas.width = width;
		canvas.height = height;
		$("#canvasContainer").css("height",height);
		$("#canvasContainer").css("width",width);
		$("#fallback").text("SD Version");
		reset();
		localStorage["fallback"] = "false";
	}
}
