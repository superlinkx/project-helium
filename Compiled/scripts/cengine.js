/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
function getLevelData(){var a=new XMLHttpRequest;a.open("GET","levels.json",!1);a.send(null);a.status==200&&eval(a.responseText)}function backgroundDraw(){bgpos==50&&(bgpos=0);ctx.fillStyle="rgb(0,0,0)";ctx.fillRect(0,0,w,h);ctx.fillStyle="rgb(0,255,0)";for(i=50;i<=w;i+=50)ctx.fillRect(i,0,1,h);for(i=bgpos-50;i<=h;i+=50)ctx.fillRect(0,i,w,1);bgpos+=1}function playerDraw(){rightKey&&(px+=5);leftKey&&(px-=5);upKey&&(py-=5);downKey&&(py+=5);playerBounds();ctx.drawImage(pSprite,px,py)}
function playerBounds(){px>w-31&&(px=w-30);px<1&&(px=0);py>h-31&&(py=h-30);py<1&&(py=0)}function shipCollision(){for(var a=0;a<enemies.length;a++)if(px>=enemies[a][0]&&px<=enemies[a][0]+e1w||px+pw>=enemies[a][0]&&px+pw<=enemies[a][0]+e1w)if(py>=enemies[a][1]&&py<=enemies[a][1]+e1h||py+ph>=enemies[a][1]&&py+ph<=enemies[a][1]+e1h)explodeEffect.pause(),explodeEffect.currentTime=0,explodeEffect.play(),checkLives()}
function drawEnemy1(){for(var a=0;a<enemies.length;a++)ctx.drawImage(e1Sprite,enemies[a][0],enemies[a][1])}function randomPath(){return Math.ceil(Math.random()*20)}
function currentPath(a){switch(a){case 1:pathSize=w/20;break;case 2:pathSize=w/20*2;break;case 3:pathSize=w/20*3;break;case 4:pathSize=w/20*4;break;case 5:pathSize=w/20*5;break;case 6:pathSize=w/20*6;break;case 7:pathSize=w/20*7;break;case 8:pathSize=w/20*8;break;case 9:pathSize=w/20*9;break;case 10:pathSize=w/20*10;break;case 11:pathSize=w/20*11;break;case 12:pathSize=w/20*12;break;case 13:pathSize=w/20*13;break;case 14:pathSize=w/20*14;break;case 15:pathSize=w/20*15;break;case 16:pathSize=w/20*
16;break;case 17:pathSize=w/20*17;break;case 18:pathSize=w/20*18;break;case 19:pathSize=w/20*19;break;case 20:pathSize=w/20*20;break;default:return err}return pathSize}function moveEnemy1(){for(var a=0;a<enemies.length;a++)enemies[a][0]=e1xa*Math.sin(e1xf*enemies[a][1])+enemies[a][5],enemies[a][1]<h?enemies[a][1]+=enemies[a][4]:enemies[a][1]>h-1&&(enemies[a][1]=-45)}
function hitTest(){for(var a=!1,b=0;b<lasers.length;b++){for(var c=0;c<enemies.length;c++)if((lasers[b][0]>=enemies[c][0]&&lasers[b][0]<=enemies[c][0]+e1w||lasers[b][0]+laserWidth>=enemies[c][0]&&lasers[b][0]+laserWidth<=enemies[c][0]+e1w)&&lasers[b][1]>=enemies[c][1]&&lasers[b][1]<=enemies[c][1]+e1h)explodeEffect.pause(),explodeEffect.currentTime=0,explodeEffect.play(),enemyKilled+=1,a=!0,enemies.splice(c,1),sc0re+=10*sc0reMult,path=randomPath(),e1x=currentPath(path),enemies.push([e1x,-45,e1w,e1h,
enemy1Speed,e1x]);a==!0&&(lasers.splice(b,1),a=!1)}}function drawLaser(){if(lasers.length)for(var a=0;a<lasers.length;a++){var b=ctx.createLinearGradient(lasers[a][0],lasers[a][1],lasers[a][0],lasers[a][1]+20);b.addColorStop(0,"rgba(255,0,0,0.8)");b.addColorStop(1,"rgba(255,0,0,0.2)");ctx.fillStyle=b;ctx.fillRect(lasers[a][0],lasers[a][1],lasers[a][2],lasers[a][3])}}
function laserFire(){if(laserKey==!0&&laserTime>=5&&laserCount>0)laserEffect.pause(),laserEffect.currentTime=0,laserEffect.play(),lasers.push([px+(pw/2-laserWidth/2),py,laserWidth,20]),laserTime=0,laserCount--;laserTime+=1;laserCount<laserLimit&&!(laserFireTracker++%laserTimeout)&&laserCount++}function moveLaser(){for(var a=0;a<lasers.length;a++)lasers[a][1]>-11?lasers[a][1]-=10:lasers[a][1]<-10&&lasers.splice(a,1)}
function intro(){ctx.fillStyle="rgba(255,255,255,0.7)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#f00";ctx.font="54px VT323";ctx.fillText("Project Helium",w/2-150,h/2);ctx.font="36px VT323";ctx.fillText("Click to Play",w/2-95,h/2+50);ctx.fillText("Use arrow keys to move",w/2-160,h/2+90);ctx.fillText("Use space to shoot",w/2-125,h/2+130)}
function gameOver(){lives=0;ctx.fillStyle="rgba(255,255,255,0.7)";ctx.fillRect(0,0,w,h);ctx.fillStyle="#f00";ctx.fillText("Game Over!",w/2-60,h/2);ctx.fillText("Press Enter to Continue...",w/2-130,h/2+80);ctx.fillRect(w/2-65,h/2+10,120,40);ctx.fillStyle="#000";ctx.fillText("Continue?",w/2-55,h/2+35);storageCalled||updateStorage();canvas.addEventListener("click",continueButton,!1);enterKey&&(alive=!0,lives=3,sc0re=0,speed=3,reset(),canvas.removeEventListener("click",continueButton,!1))}
function fullscreen(){document.getElementById("helium").webkitRequestFullScreen?document.getElementById("helium").webkitRequestFullScreen():alert("Browser not supported. You need to install the latest WebKit (for example Chrome 15) in order to use the full-screen API.")}
function scoreboard(){ctx.font="26px VT323";ctx.fillStyle="rgba(255,255,255,0.8)";ctx.fillRect(0,0,w,60);ctx.fillStyle="#f00";ctx.fillText("Score: ",10,55);ctx.fillText(sc0re,170,55);ctx.fillText("Lives:",10,20);ctx.fillText(lives,170,20);ctx.fillText("Level:",w-170,20);ctx.fillText(lvl,w-20,20);ctx.fillText("Shots:",w-170,55);ctx.fillText(laserCount,w-20,55)}function checkLives(){lives-=1;lives>0?reset():lives==0&&(alive=!1)}
function reset(){storageCalled=!1;enemyKilled=0;lasers.splice(0,lasers.length);laserFireTracker=0;laserCount=4;px=w/2-15;py=h-30;ph=pw=30;enemies.splice(0,enemies.length);for(i=0;i<enemy1Total;i++)path=randomPath(),e1x=currentPath(path),enemies.push([e1x,-45,e1w,e1h,enemy1Speed,e1x])}
function pauseGame(){gamePaused?gamePaused&&(game=window.setTimeout(gameLoop,1E3/FPS),gamePaused=!1):(window.clearTimeout(game),gamePaused=!0,ctx.fillStyle="rgba(255,255,255,0.7)",ctx.fillRect(0,0,w,h),ctx.fillStyle="#f00",ctx.font="54px VT323",ctx.fillText("Paused",w/2-70,h/2),ctx.font="36px VT323",ctx.fillText("Press Esc to Continue",w/2-160,h/2+60))}function gameStart(){gameStarted=!0;canvas.removeEventListener("click",gameStart,!1)}
function updateStorage(){localStorage.topScore?parseInt(parseFloat(localStorage.topScore))<sc0re&&(localStorage.topScore=sc0re):localStorage.topScore=sc0re;localStorage.lastScore=sc0re;var a=document.getElementById("topScore"),b=document.getElementById("lastScore");a.innerHTML="Your Highest Score Ever Was: "+localStorage.topScore;b.innerHTML="Your Latest Score Was: "+localStorage.lastScore;storageCalled=!0}
function keyDown(a){a.preventDefault();a.keyCode==39?rightKey=!0:a.keyCode==37&&(leftKey=!0);a.keyCode==38?upKey=!0:a.keyCode==40&&(downKey=!0);a.keyCode==32&&(laserKey=!0);a.keyCode==13&&(enterKey=!0);a.keyCode==27&&pauseGame()}function keyUp(a){a.preventDefault();a.keyCode==39?rightKey=!1:a.keyCode==37&&(leftKey=!1);a.keyCode==38?upKey=!1:a.keyCode==40&&(downKey=!1);a.keyCode==32&&(laserKey=!1);a.keyCode==13&&(enterKey=!1)}
function continueButton(a){var b=getCursorPos(a);if(b.x>w/2-53&&b.x<w/2+47&&b.y>h/2+10&&b.y<h/2+50||a.keyCode==13)alive=!0,lives=3,sc0re=0,speed=3,reset(),canvas.removeEventListener("click",continueButton,!1)}function getCursorPos(a){var b;a.pageX||a.pageY?(b=a.pageX,a=a.pageY):(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,a=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);b-=canvas.offsetLeft;a-=canvas.offsetTop;return new cursorPosition(b,a)}
function cursorPosition(a,b){this.x=a;this.y=b};
