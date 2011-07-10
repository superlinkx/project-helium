/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
if(!b)var b="";var FPS=30,w=240,h=480,pw=30,ph=30,e1w=30,e1h=30;bgx=y=x=0;bg1y=-480;bg2y=-1440;px=w/2-15;py=h-30;e1x=25;e1y=-45;bg1=new Image;bg1.src=b+"images/background.png";var bg2=new Image;bg2.src=b+"images/background.png";var pSprite=new Image;pSprite.src=b+"images/psprite.png";
for(var upKey=!1,downKey=!1,rightKey=!1,leftKey=!1,enemy1Total=3,enemies=[],enemy1Speed=3,lasersTotal=9,lasers=[],score=0,alive=!0,lives=3,gameStarted=!1,canvas=null,body=null,ctx=null,i=0;i<enemy1Total;i++)enemies.push([e1x,e1y,e1w,e1h,enemy1Speed]),e1x+=e1w+50;function backgroundDraw(){ctx.drawImage(bg1,bgx,bg1y);ctx.drawImage(bg2,bgx,bg2y);bg1y+=2;bg2y+=2;bg1y==480&&(bg1y=-1440);bg2y==480&&(bg2y=-1440)}
function playerDraw(){rightKey?px+=5:leftKey&&(px-=5);upKey?py-=5:downKey&&(py+=5);playerBounds();ctx.drawImage(pSprite,px,py)}function playerBounds(){px>w-31&&(px=w-30);px<1&&(px=0);py>h-31&&(py=h-30);py<1&&(py=0)}function drawEnemy1(){for(var a=0;a<enemies.length;a++)ctx.fillStyle="#f00",ctx.fillRect(enemies[a][0],enemies[a][1],e1w,e1h)}function moveEnemy1(){for(var a=0;a<enemies.length;a++)enemies[a][1]<h?enemies[a][1]+=enemies[a][4]:enemies[a][1]>h-1&&(enemies[a][1]=-45)}
function drawLaser(){if(lasers.length)for(var a=0;a<lasers.length;a++)ctx.fillStyle="#f00",ctx.fillRect(lasers[a][0],lasers[a][1],lasers[a][2],lasers[a][3],lasers[a][4],lasers[a][5],lasers[a][6],lasers[a][7],lasers[a][8],lasers[a][9],lasers[a][10])}function moveLaser(){for(var a=0;a<lasers.length;a++)lasers[a][1]>-11?lasers[a][1]-=10:lasers[a][1]<-10&&lasers.splice(a,1)}
function hitTest(){for(var a=!1,c=0;c<lasers.length;c++){for(var d=0;d<enemies.length;d++)lasers[c][1]<=enemies[d][1]+enemies[d][3]&&lasers[c][0]>=enemies[d][0]&&lasers[c][0]<=enemies[d][0]+enemies[d][2]&&(a=!0,enemies.splice(d,1),score+=10,enemies.push([Math.random()*200+25,-45,e1w,e1h,enemy1Speed]));a==!0&&(lasers.splice(c,1),a=!1)}}
function shipCollision(){for(var a=px+pw,c=py+ph,d=0;d<enemies.length;d++)px>=enemies[d][0]&&px<=enemies[d][0]+e1w&&py<=enemies[d][1]+e1h&&checkLives(),a<=enemies[d][0]+e1w&&a>=enemies[d][0]&&py>=enemies[d][1]&&py<=enemies[d][1]+e1h&&checkLives(),c>=enemies[d][1]&&c<=enemies[d][1]+e1h&&px>=enemies[d][0]&&px<=enemies[d][0]+e1w&&checkLives(),c>=enemies[d][1]&&c<=enemies[d][1]+e1h&&a<=enemies[d][0]+e1w&&a>=enemies[d][0]&&checkLives()}
function checkLives(){lives-=1;lives>0?reset():lives==0&&(alive=!1)}function reset(){var a=25;px=w/2-15;py=h-30;ph=pw=30;for(var c=0;c<enemies.length;c++)enemies[c][0]=a,enemies[c][1]=-45,a=a+e1w+50}
function scoreTotal(){ctx.font="bold 18px Arial";ctx.fillStyle="rgba(255,255,255,0.8)";ctx.fillRect(0,0,w,60);ctx.fillStyle="#f00";ctx.fillText("Score: ",10,55);ctx.fillText(score,70,55);ctx.fillText("Lives:",10,30);ctx.fillText(lives,68,30);if(!alive)lives=0,ctx.fillText("Game Over!",w/2-55,h/2),ctx.fillRect(w/2-53,h/2+10,100,40),ctx.fillStyle="#000",ctx.fillText("Continue?",w/2-48,h/2+35),canvas.addEventListener("click",continueButton,!1);if(!gameStarted)ctx.fillStyle="rgba(255,255,255,0.7)",ctx.fillRect(0,
0,w,h),ctx.fillStyle="#f00",ctx.font="bold 32px Arial",ctx.fillText("Project Helium",w/2-110,h/2),ctx.font="bold 20px Arial",ctx.fillText("Click to Play",w/2-56,h/2+30),ctx.fillText("Use ASWD to move",w/2-100,h/2+60),ctx.fillText("Use the j key to shoot",w/2-100,h/2+90)}function gameStart(){gameStarted=!0;canvas.removeEventListener("click",gameStart,!1)}
function init(){canvas=document.getElementById("helium");ctx=canvas.getContext("2d");canvas.width=w;canvas.height=h;ctx.drawImage(bg1,0,0);document.addEventListener("keydown",keyDown,!1);document.addEventListener("keyup",keyUp,!1);document.addEventListener("click",gameStart,!1);gameLoop()}
function gameLoop(){canvas.width=canvas.width;backgroundDraw();alive&&gameStarted&&lives>0&&(moveEnemy1(),moveLaser(),drawEnemy1(),playerDraw(),drawLaser(),hitTest(),shipCollision());scoreTotal();game=setTimeout(gameLoop,1E3/FPS)}function keyDown(a){a.keyCode==68?rightKey=!0:a.keyCode==65&&(leftKey=!0);a.keyCode==87?upKey=!0:a.keyCode==83&&(downKey=!0);a.keyCode==74&&lasers.length<=lasersTotal&&lasers.push([px+15,py-30,4,20])}
function keyUp(a){a.keyCode==68?rightKey=!1:a.keyCode==65&&(leftKey=!1);a.keyCode==87?upKey=!1:a.keyCode==83&&(downKey=!1)}function continueButton(a){var c=getCursorPos(a);if(c.x>w/2-53&&c.x<w/2+47&&c.y>h/2+10&&c.y<h/2+50||a.keyCode==13)alive=!0,lives=3,score=0,reset(),canvas.removeEventListener("click",continueButton,!1)}
function getCursorPos(a){var c;a.pageX||a.pageY?(c=a.pageX,a=a.pageY):(c=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,a=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);c-=canvas.offsetLeft;a-=canvas.offsetTop;return new cursorPosition(c,a)}function cursorPosition(a,c){this.x=a;this.y=c}window.onload=init;