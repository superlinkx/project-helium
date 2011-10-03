/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>, unless otherwise noted.
 All rights reserved.
 Do not distribute without permission.
*/
function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;explodeEffect.volume=0;laserEffect.volume=0;explodeEffect.play();explodeEffect.pause();laserEffect.play();laserEffect.pause();explodeEffect.volume=1;laserEffect.volume=1;canvas.addEventListener("keydown",keyDown,!1);canvas.addEventListener("keyup",keyUp,!1);var a=document.getElementById("topScore"),b=document.getElementById("lastScore");if(localStorage.topScore)a.innerHTML="Your Highest Score Ever Was: "+
localStorage.topScore;if(localStorage.lastScore)b.innerHTML="Your Latest Score Was: "+localStorage.lastScore;for(a=0;a<enemyTotal;a++)path=randomPath(),e1x=currentPath(path),type=randomType(),b=typeSpeed(type),enemies.push(new Enemy(e1x,e1y,e1w,e1h,b,e1x,type));player=new Player(px,py);gameLoop()}
function gameLoop(){ctx.clearRect(0,0,w,h);backgroundDraw();enterKey&&gameStart();gameStarted||intro();alive&&gameStarted&&lives>0&&(lvlchecker(),moveEnemy(),moveLaser(),drawEnemy(),laserFire(),drawLaser(),playerDraw(),hitTest(),shipCollision());alive||gameOver();scoreboard();game=window.setTimeout("gameLoop()",1E3/FPS)}window.onload=init;
