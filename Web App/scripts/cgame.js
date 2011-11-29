/*
 Copyright 2011 Steven Holms <superlinkx@gmail.com>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;canvas.addEventListener("keydown",keyDown,!1);canvas.addEventListener("keyup",keyUp,!1);var a=document.getElementById("topScore"),b=document.getElementById("lastScore");if(localStorage.topScore)a.innerHTML="Your Highest Score Ever Was: "+localStorage.topScore;if(localStorage.lastScore)b.innerHTML="Your Latest Score Was: "+localStorage.lastScore;for(a=0;a<enemyTotal;a++)path=randomPath(),
e1x=currentPath(path),type=randomType(),b=typeSpeed(type),enemies.push(new Enemy(e1x,e1y,e1w,e1h,b,e1x,type));player=new Player(px,py);gameLoop()}
function gameLoop(){ctx.clearRect(0,0,w,h);backgroundDraw();enterKey&&gameStart();gameStarted||intro();alive&&gameStarted&&0<lives&&(lvlchecker(),moveEnemy(),moveLaser(),moveEnemyLaser(),drawEnemy(),laserFire(),drawLaser(),enemyFire(),drawEnemyLaser(),playerDraw(),hitTest(),enemyLaserTest(),shipCollision());alive||gameOver();scoreboard();game=window.setTimeout("gameLoop()",1E3/FPS)}window.onload=init;
