/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
function lvlchecker(){switch(sc0re){case 0:lvl=1;break;case 1E3:lvl=2;break;case 2E3:lvl=3;break;case 3E3:lvl=4;break;case 4E3:lvl=5;break;case 5E3:lvl=6;break;case 6E3:lvl=7;break;case 7E3:lvl=8;break;case 8E3:lvl=9;break;case 9E3:lvl=10}switch(lvl){case 1:enemy1Total=enemy1Speed=3;sc0reMult=1;break;case 2:enemy1Speed=4;enemy1Total=3;sc0reMult=1;break;case 3:enemy1Speed=5;enemy1Total=3;sc0reMult=1;break;case 4:enemy1Speed=6;enemy1Total=3;sc0reMult=1;break;case 5:enemy1Speed=7;enemy1Total=3;sc0reMult=
1;break;case 6:enemy1Speed=8;enemy1Total=3;sc0reMult=1;break;case 7:enemy1Speed=9;enemy1Total=3;sc0reMult=1;break;case 8:enemy1Speed=10;enemy1Total=3;sc0reMult=1;break;case 9:enemy1Speed=11;enemy1Total=3;sc0reMult=1;break;case 10:enemy1Speed=12,enemy1Total=3,sc0reMult=1}}
function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;explodeEffect.volume=0;laserEffect.volume=0;explodeEffect.play();explodeEffect.pause();laserEffect.play();laserEffect.pause();explodeEffect.volume=1;laserEffect.volume=1;document.addEventListener("keydown",keyDown,!1);document.addEventListener("keyup",keyUp,!1);canvas.addEventListener("click",gameStart,!1);var a=document.getElementById("topScore"),b=document.getElementById("lastScore");
if(localStorage.topScore)a.innerHTML="Your Highest Score Ever Was: "+localStorage.topScore;if(localStorage.lastScore)b.innerHTML="Your Latest Score Was: "+localStorage.lastScore;for(a=0;a<enemy1Total;a++)path=randomPath(),e1x=currentPath(path),enemies.push([e1x,e1y,e1w,e1h,enemy1Speed,e1x]);gameLoop()}
function gameLoop(){ctx.clearRect(0,0,w,h);backgroundDraw();alive&&gameStarted&&lives>0?(moveEnemy1(),moveLaser(),drawEnemy1(),laserFire(),drawLaser(),playerDraw(),hitTest(),shipCollision(),lvlchecker()):gameStarted?alive||gameOver():intro();scoreboard();game=window.setTimeout(gameLoop,1E3/FPS)}window.onload=init;
