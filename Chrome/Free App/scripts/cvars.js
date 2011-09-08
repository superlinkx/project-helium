/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
if(!b)var b="";var err,FPS=30,w=240,h=480,pw=30,ph=30,e1w=30,e1h=30;bgpos=y=x=0;px=w/2-pw/2;py=h-ph;e1x=25;e1y=-45;laserEffect=new Audio(b+"sound/laserpulse.wav");explodeEffect=new Audio(b+"sound/explode.wav");var pSprite=new Image;pSprite.src=b+"images/heliumclass1.png";
var upKey=!1,downKey=!1,rightKey=!1,leftKey=!1,enterKey=!1,gamePaused=!1,enemies=[],enemy1Speed=3,enemy1Total=3,path=null,pathSize=null,e1xa=50,e1xf=2*Math.PI/240,lasers=[],laserKey=!1,laserTime=0,laserWidth=4,laserCount=4,laserLimit=4,laserFireTracker=0,laserTimeout=20,sc0re=0,sc0reMult=1,alive=!0,lives=3,gameStarted=!1,lvl=1,storageCalled=!1,canvas=null,body=null,ctx=null;
