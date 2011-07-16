/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
function lvlchecker(){score<1E3&&(lvl1(),lvl=1);score>=1E3&&score<3E3&&(lvl2(),lvl=2);score>=3E3&&score<6E3&&(lvl3(),lvl=3);score>=6E3&&score<1E4&&(lvl4(),lvl=4);score>=1E4&&score<15E3&&(lvl5(),lvl=5);score>=15E3&&score<21E3&&(lvl6(),lvl=6);score>=21E3&&score<28E3&&(lvl7(),lvl=7);score>=28E3&&score<36E3&&(lvl8(),lvl=8);score>=36E3&&score<45E3&&(lvl9(),lvl=9);score>=45E3&&(lvl10(),lvl=10)}function lvl1(){enemy1Total=enemy1Speed=3;scoreMult=1}
function lvl2(){enemy1Speed=4;enemy1Total=3;scoreMult=2}function lvl3(){enemy1Speed=5;scoreMult=enemy1Total=3}function lvl4(){enemy1Speed=6;enemy1Total=3;scoreMult=4}function lvl5(){enemy1Speed=7;enemy1Total=3;scoreMult=5}function lvl6(){enemy1Speed=8;enemy1Total=3;scoreMult=6}function lvl7(){enemy1Speed=9;enemy1Total=3;scoreMult=7}function lvl8(){enemy1Speed=10;enemy1Total=3;scoreMult=8}function lvl9(){enemy1Speed=11;enemy1Total=3;scoreMult=9}
function lvl10(){enemy1Speed=12;enemy1Total=3;scoreMult=10};
