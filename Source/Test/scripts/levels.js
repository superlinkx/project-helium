/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/


function lvlchecker(){
    if (sc0re < 1000){
        lvl1();
        lvl = 1;
    }
    if (sc0re >= 1000 && sc0re < 3000){
        lvl2();
        lvl = 2;
    }
    if (sc0re >= 3000 && sc0re < 6000 ){
        lvl3();
        lvl = 3;
    }
    if (sc0re >= 6000 && sc0re < 10000 ){
        lvl4();
        lvl = 4;
    }
    if (sc0re >= 10000 && sc0re < 15000 ){
        lvl5();
        lvl = 5;
    }
    if (sc0re >= 15000 && sc0re < 21000 ){
        lvl6();
        lvl = 6;
    }
    if (sc0re >= 21000 && sc0re < 28000 ){
        lvl7();
        lvl = 7;
    }
    if (sc0re >= 28000 && sc0re < 36000 ){
        lvl8();
        lvl = 8;
    }
    if (sc0re >= 36000 && sc0re < 45000 ){
        lvl9();
        lvl = 9;
    }
    if (sc0re >= 45000){
        lvl10();
        lvl = 10
    }

}

function lvl1(){
    enemy1Speed = 3;
    enemy1Total = 3;
    sc0reMult = 1;
}

function lvl2(){
    enemy1Speed = 4;
    enemy1Total = 3;
    sc0reMult = 2;
}

function lvl3(){
    enemy1Speed = 5;
    enemy1Total = 3;
    sc0reMult = 3;
}

function lvl4(){
    enemy1Speed = 6;
    enemy1Total = 3;
    sc0reMult = 4;
}

function lvl5(){
    enemy1Speed = 7;
    enemy1Total = 3;
    sc0reMult = 5;
}

function lvl6(){
    enemy1Speed = 8;
    enemy1Total = 3;
    sc0reMult = 6;
}

function lvl7(){
    enemy1Speed = 9;
    enemy1Total = 3;
    sc0reMult = 7;
}

function lvl8(){
    enemy1Speed = 10;
    enemy1Total = 3;
    sc0reMult = 8;
}

function lvl9(){
    enemy1Speed = 11;
    enemy1Total = 3;
    sc0reMult = 9;
}

function lvl10(){
    enemy1Speed = 12;
    enemy1Total = 3;
    sc0reMult = 10;
}
