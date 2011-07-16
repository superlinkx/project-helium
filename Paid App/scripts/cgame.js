/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;ctx.drawImage(bg1,0,0);document.addEventListener("keydown",keyDown,!1);document.addEventListener("keyup",keyUp,!1);document.addEventListener("click",gameStart,!1);gameLoop()}
function gameLoop(){canvas.width=canvas.width;backgroundDraw();alive&&gameStarted&&lives>0&&(moveEnemy1(),moveLaser(),drawEnemy1(),playerDraw(),drawLaser(),hitTest(),shipCollision(),lvlchecker());scoreTotal();game=setTimeout(gameLoop,1E3/FPS)}function keyDown(a){a.keyCode==68?rightKey=!0:a.keyCode==65&&(leftKey=!0);a.keyCode==87?upKey=!0:a.keyCode==83&&(downKey=!0);a.keyCode==74&&lasers.push([px+15,py-30,4,20])}
function keyUp(a){a.keyCode==68?rightKey=!1:a.keyCode==65&&(leftKey=!1);a.keyCode==87?upKey=!1:a.keyCode==83&&(downKey=!1)}function continueButton(a){var b=getCursorPos(a);if(b.x>w/2-53&&b.x<w/2+47&&b.y>h/2+10&&b.y<h/2+50||a.keyCode==13)alive=!0,lives=3,sc0re=0,speed=3,reset(),canvas.removeEventListener("click",continueButton,!1)}
function getCursorPos(a){var b;a.pageX||a.pageY?(b=a.pageX,a=a.pageY):(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,a=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);b-=canvas.offsetLeft;a-=canvas.offsetTop;return new cursorPosition(b,a)}function cursorPosition(a,b){this.x=a;this.y=b}window.onload=init;
