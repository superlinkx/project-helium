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
if(!b)var b="";var err,FPS=60,w=480,h=800,pw=30,ph=30,e1w=30,e1h=30;x=0;y=0;bgpos=0;px=w/2-pw/2;py=h-ph;e1x=25;e1y=-45;bgcolor="rgb(0,0,0)";bgline="rgb(0,255,0)";lvl1=null;lvl2=null;lvl3=null;lvl4=null;lvl5=null;lvl6=null;lvl7=null;lvl8=null;lvl9=null;lvl10=null;pSprite=new Image;pSprite.src=b+"images/heliumclass1.svg";var e1Sprite=new Image;e1Sprite.src=b+"images/enemy1.svg";var e2Sprite=new Image;e2Sprite.src=b+"images/enemy2.svg";
var upKey=!1,downKey=!1,rightKey=!1,leftKey=!1,enterKey=!1,gamePaused=!1,enemies=[],enemyLasers=[],enemyKilled=0,enemy1Speed=1,enemy2Speed=2,enemyLaserTime=0,enemyTotal=8,path=null,pathSize=null,e1xa=50,e1xf=2*Math.PI/240,pspeed=5;lasers=[];laserKey=!1;laserTime=0;laserWidth=4;laserCount=4;laserLimit=4;laserFireTracker=0;laserTimeout=20;laserSpeed=10;sc0re=0;sc0reMult=1;alive=!0;lives=3;gameStarted=!1;lvl=1;storageCalled=!1;canvas=null;body=null;ctx=null;fallback=!1;speedMult=1;function lvl_init(){lvl1=new Level([1,2,8,1,"rgb(0,0,0)","rgb(0,255,0)"]);lvl2=new Level([2,3,9,1,"rgb(0,0,0)","rgb(0,0,255)"]);lvl3=new Level([3,4,10,1,"rgb(0,0,0)","rgb(255,0,0)"]);lvl4=new Level([4,5,11,1,"rgb(0,0,0)","rgb(0,255,255)"]);lvl5=new Level([5,6,12,1,"rgb(0,0,0)","rgb(255,255,0)"]);lvl6=new Level([6,7,13,1,"rgb(0,0,0)","rgb(255,0,255)"]);lvl7=new Level([7,8,14,1,"rgb(0,0,0)","rgb(255,255,255)"]);lvl8=new Level([8,9,15,1,"rgb(255,255,255)","rgb(0,0,0)"]);lvl9=new Level([9,10,16,1,"rgb(255,255,255)",
"rgb(0,255,0)"]);lvl10=new Level([10,11,17,1,"rgb(255,255,255)","rgb(255,0,0)"])}function Level(a){this.enemy1Speed=a[0];this.enemy2Speed=a[1];this.enemyTotal=a[2];this.sc0reMult=a[3];this.bgcolor=a[4];this.bgline=a[5]}function lvlReader(){enemy1Speed=currentLevel.enemy1Speed;enemy2Speed=currentLevel.enemy2Speed;enemyTotal=currentLevel.enemyTotal;sc0reMult=currentLevel.sc0reMult;bgcolor=currentLevel.bgcolor;bgline=currentLevel.bgline}
function lvlchecker(){100>enemyKilled&&(lvl=1);100<=enemyKilled&&200>enemyKilled&&(lvl=2);200<=enemyKilled&&300>enemyKilled&&(lvl=3);300<=enemyKilled&&400>enemyKilled&&(lvl=4);400<=enemyKilled&&500>enemyKilled&&(lvl=5);500<=enemyKilled&&600>enemyKilled&&(lvl=6);600<=enemyKilled&&700>enemyKilled&&(lvl=7);700<=enemyKilled&&800>enemyKilled&&(lvl=8);800<=enemyKilled&&900>enemyKilled&&(lvl=9);900<=enemyKilled&&(lvl=10);switch(lvl){case 1:currentLevel=lvl1;break;case 2:currentLevel=lvl2;break;case 3:currentLevel=
lvl3;break;case 4:currentLevel=lvl4;break;case 5:currentLevel=lvl5;break;case 6:currentLevel=lvl6;break;case 7:currentLevel=lvl7;break;case 8:currentLevel=lvl8;break;case 9:currentLevel=lvl9;break;case 10:currentLevel=lvl10}};function backgroundDraw(){60==bgpos&&(bgpos=0);ctx.fillStyle=bgcolor;ctx.fillRect(0,0,w,h);ctx.beginPath();ctx.strokeStyle=bgline;for(i=60;i<=w;i+=60)ctx.moveTo(i,0),ctx.lineTo(i,h);for(i=bgpos;i<=h;i+=60)ctx.moveTo(0,i),ctx.lineTo(w,i);ctx.stroke();bgpos+=1}function Player(a,c){this.x=a;this.y=c;this.h=this.w=30}
function playerDraw(){rightKey&&(player.x+=pspeed*speedMult);leftKey&&(player.x-=pspeed*speedMult);upKey&&(player.y-=pspeed*speedMult);downKey&&(player.y+=pspeed*speedMult);playerBounds();ctx.drawImage(pSprite,player.x,player.y)}function playerBounds(){if(player.x>w-31)player.x=w-30;if(1>player.x)player.x=0;if(player.y>h-31)player.y=h-30;if(1>player.y)player.y=0}
function shipCollision(){for(var a=0;a<enemies.length;a++)if(player.x>=enemies[a].x&&player.x<=enemies[a].x+enemies[a].w||player.x+player.w>=enemies[a].x&&player.x+player.w<=enemies[a].x+enemies[a].w)(player.y>=enemies[a].y&&player.y<=enemies[a].y+enemies[a].h||player.y+player.h>=enemies[a].y&&player.y+player.h<=enemies[a].y+enemies[a].h)&&checkLives()}function Enemy(a,c,d,e,f,g,j){this.x=a;this.y=c;this.w=d;this.h=e;this.speed=f;this.initx=g;this.type=j;this.fired=0}
function drawEnemy(){for(var a=0;a<enemies.length;a++)switch(enemies[a].type){case 1:ctx.drawImage(e1Sprite,enemies[a].x,enemies[a].y);break;case 2:ctx.drawImage(e2Sprite,enemies[a].x,enemies[a].y);break;default:ctx.drawImage(e1Sprite,enemies[a].x,enemies[a].y)}}function enemyFire(){for(var a=0;a<enemies.length;a++)switch(enemies[a].type){case 2:if(!enemies[a].fired)enemyLasers.push(new Laser(enemies[a].x+(enemies[a].w/2-laserWidth/2),enemies[a].y,laserWidth,20)),enemies[a].fired=1}}
function drawEnemyLaser(){if(enemyLasers.length)for(var a=0;a<enemyLasers.length;a++){var c=ctx.createLinearGradient(enemyLasers[a].x,enemyLasers[a].y,enemyLasers[a].x,enemyLasers[a].y+20);c.addColorStop(0,"rgba(255,0,0,0.2)");c.addColorStop(1,"rgba(255,0,0,0.8)");ctx.fillStyle=c;ctx.fillRect(enemyLasers[a].x,enemyLasers[a].y,enemyLasers[a].w,enemyLasers[a].h)}}
function moveEnemyLaser(){for(var a=0;a<enemyLasers.length;a++)enemyLasers[a].y+=laserSpeed*speedMult,810<enemyLasers[a].y&&enemyLasers.splice(a,1)}function randomType(){var a=Math.ceil(2*Math.random());0==a&&(a=1);return a}function typeSpeed(a){switch(a){case 1:return enemy1Speed;case 2:return enemy2Speed;default:return enemy1Speed}}function randomPath(){return Math.ceil(20*Math.random())}
function currentPath(a){switch(a){case 1:pathSize=w/20;break;case 2:pathSize=2*(w/20);break;case 3:pathSize=3*(w/20);break;case 4:pathSize=4*(w/20);break;case 5:pathSize=5*(w/20);break;case 6:pathSize=6*(w/20);break;case 7:pathSize=7*(w/20);break;case 8:pathSize=8*(w/20);break;case 9:pathSize=9*(w/20);break;case 10:pathSize=10*(w/20);break;case 11:pathSize=11*(w/20);break;case 12:pathSize=12*(w/20);break;case 13:pathSize=13*(w/20);break;case 14:pathSize=14*(w/20);break;case 15:pathSize=15*(w/20);
break;case 16:pathSize=16*(w/20);break;case 17:pathSize=17*(w/20);break;case 18:pathSize=18*(w/20);break;case 19:pathSize=19*(w/20);break;case 20:pathSize=20*(w/20);break;default:return err}return pathSize}
function moveEnemy(){for(var a=0;a<enemies.length;a++)switch(enemies[a].type){case 1:enemies[a].x=e1xa*Math.sin(e1xf*enemies[a].y)+enemies[a].initx;if(enemies[a].y<h)enemies[a].y+=enemies[a].speed*speedMult;else if(enemies[a].y>h-1)enemies[a].y=-45;break;case 2:if(enemies[a].y<h)enemies[a].y+=enemies[a].speed*speedMult;else if(enemies[a].y>h-1)enemies[a].y=-45;break;default:if(enemies[a].x=e1xa*Math.sin(e1xf*enemies[a].y)+enemies[a].initx,enemies[a].y<h)enemies[a].y+=enemies[a].speed*speedMult;else if(enemies[a].y>
h-1)enemies[a].y=-45}}function enemyLaserTest(){for(var a=!1,c=0;c<enemyLasers.length;c++){if((enemyLasers[c].x>=player.x&&enemyLasers[c].x<=player.x+player.w||enemyLasers[c].x+enemyLasers[c].w>=player.x&&enemyLasers[c].x+enemyLasers[c].w<=player.x+player.w)&&enemyLasers[c].y>=player.y&&enemyLasers[c].y<=player.y+player.h)a=!0,checkLives();!0==a&&(enemyLasers.splice(c,1),a=!1)}}
function hitTest(){for(var a=!1,c=0;c<lasers.length;c++){for(var d=0;d<enemies.length;d++)if((lasers[c].x>=enemies[d].x&&lasers[c].x<=enemies[d].x+enemies[d].w||lasers[c].x+lasers[c].w>=enemies[d].x&&lasers[c].x+lasers[c].w<=enemies[d].x+enemies[d].w)&&lasers[c].y>=enemies[d].y&&lasers[c].y<=enemies[d].y+enemies[d].h){enemyKilled+=1;a=!0;enemies.splice(d,1);sc0re+=10*sc0reMult;path=randomPath();e1x=currentPath(path);type=randomType();var e=typeSpeed(type);enemies.push(new Enemy(e1x,-45,e1w,e1h,e,
e1x,type))}!0==a&&(lasers.splice(c,1),a=!1)}}function Laser(a,c,d,e){this.x=a;this.y=c;this.w=d;this.h=e}function drawLaser(){if(lasers.length)for(var a=0;a<lasers.length;a++){var c=ctx.createLinearGradient(lasers[a].x,lasers[a].y,lasers[a].x,lasers[a].y+20);c.addColorStop(0,"rgba(255,0,0,0.8)");c.addColorStop(1,"rgba(255,0,0,0.2)");ctx.fillStyle=c;ctx.fillRect(lasers[a].x,lasers[a].y,lasers[a].w,lasers[a].h)}}
function laserFire(){!0==laserKey&&5<=laserTime&&0<laserCount&&(lasers.push(new Laser(player.x+(player.w/2-laserWidth/2),player.y,laserWidth,20)),laserTime=0,laserCount--);laserTime+=1;laserCount<laserLimit&&!(laserFireTracker++%(laserTimeout/speedMult))&&laserCount++}function moveLaser(){for(var a=0;a<lasers.length;a++)-11<lasers[a].y?lasers[a].y-=laserSpeed*speedMult:-10>lasers[a].y&&lasers.splice(a,1)}function checkLives(){lives-=1;reset();0==lives&&(alive=!1)}
function reset(){storageCalled=!1;lasers.splice(0,lasers.length);enemyLasers.splice(0,lasers.length);laserFireTracker=enemyLasers.length=0;laserCount=4;player.x=w/2-15;player.y=h-30;player.w=30;player.h=30;enemies.splice(0,enemies.length);for(i=0;i<enemyTotal;i++){path=randomPath();e1x=currentPath(path);type=randomType();var a=typeSpeed(type);enemies.push(new Enemy(e1x,-45,e1w,e1h,a,e1x,type))}}
function keyDown(a){a.preventDefault();39==a.keyCode?rightKey=!0:37==a.keyCode&&(leftKey=!0);38==a.keyCode?upKey=!0:40==a.keyCode&&(downKey=!0);32==a.keyCode&&(laserKey=!0);13==a.keyCode&&(enterKey=!0);191==a.keyCode&&pauseGame()}function keyUp(a){a.preventDefault();39==a.keyCode?rightKey=!1:37==a.keyCode&&(leftKey=!1);38==a.keyCode?upKey=!1:40==a.keyCode&&(downKey=!1);32==a.keyCode&&(laserKey=!1);13==a.keyCode&&(enterKey=!1)};function intro(){ctx.fillStyle="rgba(255,255,255,0.7)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#f00";ctx.font='54px "Times New Roman"';ctx.fillText("Project Helium",w/2-160,h/2);ctx.font='36px "Times New Roman"';ctx.fillText("Press Enter to Play",w/2-130,h/2+50);ctx.fillText("Use arrow keys to move",w/2-175,h/2+90);ctx.fillText("Use space to shoot",w/2-130,h/2+130)}
function gameOver(){lives=0;ctx.fillStyle="rgba(255,255,255,0.7)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#f00";ctx.fillText("Game Over!",w/2-63,h/2);ctx.fillText("Press Enter to Continue...",w/2-133,h/2+80);storageCalled||updateStorage();enterKey&&(alive=!0,lives=3,enemyKilled=sc0re=0,enemy1Speed=3,enemy2Speed=4,reset())}
function fullscreen(){document.getElementById("helium").webkitRequestFullScreen?document.getElementById("helium").webkitRequestFullScreen():alert("Browser not supported. You need to install the latest WebKit (for example Chrome 15) in order to use the full-screen API.")}
function scoreboard(){ctx.font='26px "Times New Roman"';ctx.fillStyle="rgba(255,255,255,0.8)";ctx.fillRect(0,0,w,60);ctx.fillStyle="#f00";ctx.fillText("Score: ",10,55);ctx.fillText(sc0re,170,55);ctx.fillText("Lives:",10,20);ctx.fillText(lives,170,20);ctx.fillText("Level:",w-170,20);10>lvl&&ctx.fillText(lvl,w-20,20);10<=lvl&&ctx.fillText(lvl,w-30,20);ctx.fillText("Shots:",w-170,55);ctx.fillText(laserCount,w-20,55)}
function pauseGame(){gamePaused?(game=window.setTimeout(gameLoop,1E3/FPS),gamePaused=!1):(window.clearTimeout(game),gamePaused=!0,ctx.fillStyle="rgba(255,255,255,0.7)",ctx.fillRect(0,0,w,h),ctx.fillStyle="#f00",ctx.font='54px "Times New Roman"',ctx.fillText("Paused",w/2-70,h/2),ctx.font='36px "Times New Roman"',ctx.fillText("Press / to Continue",w/2-130,h/2+60))}function gameStart(){gameStarted=!0;reset();canvas.removeEventListener("click",gameStart,!1)}
function updateStorage(){localStorage.topScore?parseInt(parseFloat(localStorage.topScore))<sc0re&&(localStorage.topScore=sc0re):localStorage.topScore=sc0re;localStorage.lastScore=sc0re;var a=document.getElementById("topScore"),c=document.getElementById("lastScore");a.innerHTML="Your Highest Score Ever Was: "+localStorage.topScore;c.innerHTML="Your Latest Score Was: "+localStorage.lastScore;storageCalled=!0}
function toggle_fallback(){!1===fallback?(fallback=!0,speedMult=2,FPS=30):(fallback=!1,speedMult=1,FPS=60)};function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;canvas.addEventListener("keydown",keyDown,!1);canvas.addEventListener("keyup",keyUp,!1);var a=document.getElementById("topScore"),c=document.getElementById("lastScore");if(localStorage.topScore)a.innerHTML="Your Highest Score Ever Was: "+localStorage.topScore;if(localStorage.lastScore)c.innerHTML="Your Latest Score Was: "+localStorage.lastScore;for(a=0;a<enemyTotal;a++)path=randomPath(),
e1x=currentPath(path),type=randomType(),c=typeSpeed(type),enemies.push(new Enemy(e1x,e1y,e1w,e1h,c,e1x,type));player=new Player(px,py);lvl_init();gameLoop()}
function gameLoop(){ctx.clearRect(0,0,w,h);backgroundDraw();enterKey&&gameStart();gameStarted||intro();alive&&gameStarted&&0<lives&&(lvlchecker(),lvlReader(),moveEnemy(),moveLaser(),moveEnemyLaser(),drawLaser(),drawEnemy(),drawEnemyLaser(),playerDraw(),enemyFire(),laserFire(),hitTest(),enemyLaserTest(),shipCollision());alive||gameOver();scoreboard();game=window.setTimeout("gameLoop()",1E3/FPS)}window.onload=init;
