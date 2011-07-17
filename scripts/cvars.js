/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
if(!b)var b="";var FPS=30,w=240,h=480,pw=30,ph=30,e1w=30,e1h=30;bgx=y=x=0;bg1y=-480;bg2y=-1440;px=w/2-15;py=h-30;e1x=25;e1y=-45;bg1=new Image;bg1.src=b+"images/background.png";var bg2=new Image;bg2.src=b+"images/background.png";var pSprite=new Image;pSprite.src=b+"images/psprite.png";
for(var upKey=!1,downKey=!1,rightKey=!1,leftKey=!1,enemy1Total=3,enemies=[],enemy1Speed=3,e1xa=50,e1xf=2*Math.PI/240,lasers=[],laserKey=!1,laserTime=0,laserWidth=4,laserCount=8,laserLimit=8,laserFireTracker=0,sc0re=0,scoreMult=1,alive=!0,lives=3,gameStarted=!1,lvl=1,canvas=null,body=null,ctx=null,i=0;i<enemy1Total;i++)e1x=Math.random()*200+25,enemies.push([e1x,e1y,e1w,e1h,enemy1Speed,e1x]);
