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
if(!b)var b="";var err,FPS=30,w=480,h=800,pw=30,ph=30,e1w=30,e1h=30;x=0;y=0;bgpos=0;px=w/2-pw/2;py=h-ph;e1x=25;e1y=-45;pSprite=new Image;pSprite.src=b+"images/heliumclass1.png";var e1Sprite=new Image;e1Sprite.src=b+"images/enemy1.png";var e2Sprite=new Image;e2Sprite.src=b+"images/enemy2.png";
var upKey=!1,downKey=!1,rightKey=!1,leftKey=!1,enterKey=!1,gamePaused=!1,enemies=[],enemyLasers=[],enemyKilled=0,enemy1Speed=3,enemy2Speed=4,enemyLaserTime=0,enemyTotal=8,path=null,pathSize=null,e1xa=50,e1xf=2*Math.PI/240,lasers=[],laserKey=!1,laserTime=0,laserWidth=4,laserCount=4,laserLimit=4,laserFireTracker=0,laserTimeout=20,sc0re=0,sc0reMult=1,alive=!0,lives=3,gameStarted=!1,lvl=1,storageCalled=!1,canvas=null,body=null,ctx=null;
