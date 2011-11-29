function backgroundDraw(){50==bgpos&&(bgpos=0);ctx.fillStyle="rgb(0,0,0)";ctx.fillRect(0,0,w,h);ctx.fillStyle="rgb(0,255,0)";for(i=50;i<=w;i+=50)ctx.fillRect(i,0,1,h);for(i=bgpos-50;i<=h;i+=50)ctx.fillRect(0,i,w,1);bgpos+=1}function Player(a,b){this.x=a;this.y=b;this.h=this.w=30}function playerDraw(){rightKey&&(player.x+=5);leftKey&&(player.x-=5);upKey&&(player.y-=5);downKey&&(player.y+=5);playerBounds();ctx.drawImage(pSprite,player.x,player.y)}
function playerBounds(){if(player.x>w-31)player.x=w-30;if(1>player.x)player.x=0;if(player.y>h-31)player.y=h-30;if(1>player.y)player.y=0}function shipCollision(){for(var a=0;a<enemies.length;a++)if(player.x>=enemies[a].x&&player.x<=enemies[a].x+enemies[a].w||player.x+player.w>=enemies[a].x&&player.x+player.w<=enemies[a].x+enemies[a].w)(player.y>=enemies[a].y&&player.y<=enemies[a].y+enemies[a].h||player.y+player.h>=enemies[a].y&&player.y+player.h<=enemies[a].y+enemies[a].h)&&checkLives()}
function Enemy(a,b,c,d,e,f,g){this.x=a;this.y=b;this.w=c;this.h=d;this.speed=e;this.initx=f;this.type=g;this.fired=0}function drawEnemy(){for(var a=0;a<enemies.length;a++)switch(enemies[a].type){case 1:ctx.drawImage(e1Sprite,enemies[a].x,enemies[a].y);break;case 2:ctx.drawImage(e2Sprite,enemies[a].x,enemies[a].y);break;default:ctx.drawImage(e1Sprite,enemies[a].x,enemies[a].y)}}
function enemyFire(){for(var a=0;a<enemies.length;a++)switch(enemies[a].type){case 2:if(!enemies[a].fired)enemyLasers.push(new Laser(enemies[a].x+(enemies[a].w/2-laserWidth/2),enemies[a].y,laserWidth,20)),enemies[a].fired=1}}
function drawEnemyLaser(){if(enemyLasers.length)for(var a=0;a<enemyLasers.length;a++){var b=ctx.createLinearGradient(enemyLasers[a].x,enemyLasers[a].y,enemyLasers[a].x,enemyLasers[a].y+20);b.addColorStop(0,"rgba(255,0,0,0.2)");b.addColorStop(1,"rgba(255,0,0,0.8)");ctx.fillStyle=b;ctx.fillRect(enemyLasers[a].x,enemyLasers[a].y,enemyLasers[a].w,enemyLasers[a].h)}}function moveEnemyLaser(){for(var a=0;a<enemyLasers.length;a++)enemyLasers[a].y+=10,810<enemyLasers[a].y&&enemyLasers.splice(a,1)}
function randomType(){var a=Math.ceil(2*Math.random());0==a&&(a=1);return a}function typeSpeed(a){switch(a){case 1:return enemy1Speed;case 2:return enemy2Speed;default:return enemy1Speed}}function randomPath(){return Math.ceil(20*Math.random())}
function currentPath(a){switch(a){case 1:pathSize=w/20;break;case 2:pathSize=2*(w/20);break;case 3:pathSize=3*(w/20);break;case 4:pathSize=4*(w/20);break;case 5:pathSize=5*(w/20);break;case 6:pathSize=6*(w/20);break;case 7:pathSize=7*(w/20);break;case 8:pathSize=8*(w/20);break;case 9:pathSize=9*(w/20);break;case 10:pathSize=10*(w/20);break;case 11:pathSize=11*(w/20);break;case 12:pathSize=12*(w/20);break;case 13:pathSize=13*(w/20);break;case 14:pathSize=14*(w/20);break;case 15:pathSize=15*(w/20);
break;case 16:pathSize=16*(w/20);break;case 17:pathSize=17*(w/20);break;case 18:pathSize=18*(w/20);break;case 19:pathSize=19*(w/20);break;case 20:pathSize=20*(w/20);break;default:return err}return pathSize}
function moveEnemy(){for(var a=0;a<enemies.length;a++)switch(enemies[a].type){case 1:enemies[a].x=e1xa*Math.sin(e1xf*enemies[a].y)+enemies[a].initx;if(enemies[a].y<h)enemies[a].y+=enemies[a].speed;else if(enemies[a].y>h-1)enemies[a].y=-45;break;case 2:if(enemies[a].y<h)enemies[a].y+=enemies[a].speed;else if(enemies[a].y>h-1)enemies[a].y=-45;break;default:if(enemies[a].x=e1xa*Math.sin(e1xf*enemies[a].y)+enemies[a].initx,enemies[a].y<h)enemies[a].y+=enemies[a].speed;else if(enemies[a].y>h-1)enemies[a].y=
-45}}function enemyLaserTest(){for(var a=!1,b=0;b<enemyLasers.length;b++){if((enemyLasers[b].x>=player.x&&enemyLasers[b].x<=player.x+player.w||enemyLasers[b].x+enemyLasers[b].w>=player.x&&enemyLasers[b].x+enemyLasers[b].w<=player.x+player.w)&&enemyLasers[b].y>=player.y&&enemyLasers[b].y<=player.y+player.h)a=!0,checkLives();!0==a&&(enemyLasers.splice(b,1),a=!1)}}
function hitTest(){for(var a=!1,b=0;b<lasers.length;b++){for(var c=0;c<enemies.length;c++)if((lasers[b].x>=enemies[c].x&&lasers[b].x<=enemies[c].x+enemies[c].w||lasers[b].x+lasers[b].w>=enemies[c].x&&lasers[b].x+lasers[b].w<=enemies[c].x+enemies[c].w)&&lasers[b].y>=enemies[c].y&&lasers[b].y<=enemies[c].y+enemies[c].h){enemyKilled+=1;a=!0;enemies.splice(c,1);sc0re+=10*sc0reMult;path=randomPath();e1x=currentPath(path);type=randomType();var d=typeSpeed(type);enemies.push(new Enemy(e1x,-45,e1w,e1h,d,
e1x,type))}!0==a&&(lasers.splice(b,1),a=!1)}}function Laser(a,b,c,d){this.x=a;this.y=b;this.w=c;this.h=d}function drawLaser(){if(lasers.length)for(var a=0;a<lasers.length;a++){var b=ctx.createLinearGradient(lasers[a].x,lasers[a].y,lasers[a].x,lasers[a].y+20);b.addColorStop(0,"rgba(255,0,0,0.8)");b.addColorStop(1,"rgba(255,0,0,0.2)");ctx.fillStyle=b;ctx.fillRect(lasers[a].x,lasers[a].y,lasers[a].w,lasers[a].h)}}
function laserFire(){!0==laserKey&&5<=laserTime&&0<laserCount&&(lasers.push(new Laser(player.x+(player.w/2-laserWidth/2),player.y,laserWidth,20)),laserTime=0,laserCount--);laserTime+=1;laserCount<laserLimit&&!(laserFireTracker++%laserTimeout)&&laserCount++}function moveLaser(){for(var a=0;a<lasers.length;a++)-11<lasers[a].y?lasers[a].y-=10:-10>lasers[a].y&&lasers.splice(a,1)}
function intro(){ctx.fillStyle="rgba(255,255,255,0.7)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#f00";ctx.font="54px VT323";ctx.fillText("Project Helium",w/2-150,h/2);ctx.font="36px VT323";ctx.fillText("Press Enter to Play",w/2-135,h/2+50);ctx.fillText("Use arrow keys to move",w/2-160,h/2+90);ctx.fillText("Use space to shoot",w/2-125,h/2+130)}
function gameOver(){lives=0;ctx.fillStyle="rgba(255,255,255,0.7)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#f00";ctx.fillText("Game Over!",w/2-60,h/2);ctx.fillText("Press Enter to Continue...",w/2-130,h/2+80);storageCalled||updateStorage();enterKey&&(alive=!0,lives=3,enemyKilled=sc0re=0,enemy1Speed=3,enemy2Speed=4,reset())}
function fullscreen(){document.getElementById("helium").webkitRequestFullScreen?document.getElementById("helium").webkitRequestFullScreen():alert("Browser not supported. You need to install the latest WebKit (for example Chrome 15) in order to use the full-screen API.")}
function scoreboard(){ctx.font="26px VT323";ctx.fillStyle="rgba(255,255,255,0.8)";ctx.fillRect(0,0,w,60);ctx.fillStyle="#f00";ctx.fillText("Score: ",10,55);ctx.fillText(sc0re,170,55);ctx.fillText("Lives:",10,20);ctx.fillText(lives,170,20);ctx.fillText("Level:",w-170,20);ctx.fillText(lvl,w-20,20);ctx.fillText("Shots:",w-170,55);ctx.fillText(laserCount,w-20,55)}function checkLives(){lives-=1;0<lives?reset():0==lives&&(alive=!1)}
function reset(){storageCalled=!1;lasers.splice(0,lasers.length);laserFireTracker=0;laserCount=4;player.x=w/2-15;player.y=h-30;player.w=30;player.h=30;enemies.splice(0,enemies.length);for(i=0;i<enemyTotal;i++){path=randomPath();e1x=currentPath(path);type=randomType();var a=typeSpeed(type);enemies.push(new Enemy(e1x,-45,e1w,e1h,a,e1x,type))}}
function pauseGame(){gamePaused?(game=window.setTimeout(gameLoop,1E3/FPS),gamePaused=!1):(window.clearTimeout(game),gamePaused=!0,ctx.fillStyle="rgba(255,255,255,0.7)",ctx.fillRect(0,0,w,h),ctx.fillStyle="#f00",ctx.font="54px VT323",ctx.fillText("Paused",w/2-70,h/2),ctx.font="36px VT323",ctx.fillText("Press / to Continue",w/2-160,h/2+60))}function gameStart(){gameStarted=!0;canvas.removeEventListener("click",gameStart,!1)}
function updateStorage(){localStorage.topScore?parseInt(parseFloat(localStorage.topScore))<sc0re&&(localStorage.topScore=sc0re):localStorage.topScore=sc0re;localStorage.lastScore=sc0re;var a=document.getElementById("topScore"),b=document.getElementById("lastScore");a.innerHTML="Your Highest Score Ever Was: "+localStorage.topScore;b.innerHTML="Your Latest Score Was: "+localStorage.lastScore;storageCalled=!0}
function keyDown(a){a.preventDefault();39==a.keyCode?rightKey=!0:37==a.keyCode&&(leftKey=!0);38==a.keyCode?upKey=!0:40==a.keyCode&&(downKey=!0);32==a.keyCode&&(laserKey=!0);13==a.keyCode&&(enterKey=!0);191==a.keyCode&&pauseGame()}function keyUp(a){a.preventDefault();39==a.keyCode?rightKey=!1:37==a.keyCode&&(leftKey=!1);38==a.keyCode?upKey=!1:40==a.keyCode&&(downKey=!1);32==a.keyCode&&(laserKey=!1);13==a.keyCode&&(enterKey=!1)};