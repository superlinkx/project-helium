/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;document.addEventListener("keydown",keyDown,!1);document.addEventListener("keyup",keyUp,!1);document.addEventListener("click",gameStart,!1);gameLoop()}
function gameLoop(){ctx.clearRect(0,0,w,h);backgroundDraw();alive&&gameStarted&&lives>0&&(moveEnemy1(),moveLaser(),drawEnemy1(),laserFire(),drawLaser(),playerDraw(),hitTest(),shipCollision(),lvlchecker());scoreTotal();game=setTimeout(gameLoop,1E3/FPS)}window.onload=init;
