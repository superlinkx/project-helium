/*
 Copyright 2011
 Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
 All rights reserved.
 Do not distribute without permission.
*/
function lvlchecker(){sc0re<1E3&&(lvl1(),lvl=1);sc0re>=1E3&&sc0re<3E3&&(lvl2(),lvl=2);sc0re>=3E3&&sc0re<6E3&&(lvl3(),lvl=3);sc0re>=6E3&&sc0re<1E4&&(lvl4(),lvl=4);sc0re>=1E4&&sc0re<15E3&&(lvl5(),lvl=5);sc0re>=15E3&&sc0re<21E3&&(lvl6(),lvl=6);sc0re>=21E3&&sc0re<28E3&&(lvl7(),lvl=7);sc0re>=28E3&&sc0re<36E3&&(lvl8(),lvl=8);sc0re>=36E3&&sc0re<45E3&&(lvl9(),lvl=9);sc0re>=45E3&&(lvl10(),lvl=10)}function lvl1(){enemy1Total=enemy1Speed=3;sc0reMult=1}
function lvl2(){enemy1Speed=4;enemy1Total=3;sc0reMult=2}function lvl3(){enemy1Speed=5;sc0reMult=enemy1Total=3}function lvl4(){enemy1Speed=6;enemy1Total=3;sc0reMult=4}function lvl5(){enemy1Speed=7;enemy1Total=3;sc0reMult=5}function lvl6(){enemy1Speed=8;enemy1Total=3;sc0reMult=6}function lvl7(){enemy1Speed=9;enemy1Total=3;sc0reMult=7}function lvl8(){enemy1Speed=10;enemy1Total=3;sc0reMult=8}function lvl9(){enemy1Speed=11;enemy1Total=3;sc0reMult=9}
function lvl10(){enemy1Speed=12;enemy1Total=3;sc0reMult=10};
