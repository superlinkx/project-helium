/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;explodeEffect.volume=0;laserEffect.volume=0;explodeEffect.play();explodeEffect.pause();laserEffect.play();laserEffect.pause();explodeEffect.volume=1;laserEffect.volume=1;document.addEventListener("keydown",keyDown,!1);document.addEventListener("keyup",keyUp,!1);canvas.addEventListener("click",gameStart,!1);var a=document.getElementById("topScore"),b=document.getElementById("lastScore");
if(localStorage.topScore)a.innerHTML="Your Highest Score Ever Was: "+localStorage.topScore;if(localStorage.lastScore)b.innerHTML="Your Latest Score Was: "+localStorage.lastScore;for(a=0;a<enemy1Total;a++)path=randomPath(),e1x=currentPath(path),enemies.push([e1x,e1y,e1w,e1h,enemy1Speed,e1x]);gameLoop()}
function gameLoop(){ctx.clearRect(0,0,w,h);backgroundDraw();alive&&gameStarted&&lives>0?(moveEnemy1(),moveLaser(),drawEnemy1(),laserFire(),drawLaser(),playerDraw(),hitTest(),shipCollision(),lvlchecker()):gameStarted?alive||gameOver():intro();scoreboard();game=window.setTimeout(gameLoop,1E3/FPS)}window.onload=init;
