/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/


function lvlchecker(){
    if (score < 1000){
        lvl1();
        lvl = 1;
    }
    if (score >= 1000 && score < 3000){
        lvl2();
        lvl = 2;
    }
    if (score >= 3000 && score < 6000 ){
        lvl3();
        lvl = 3;
    }
    if (score >= 6000 && score < 10000 ){
        lvl4();
        lvl = 4;
    }
    if (score >= 10000 && score < 15000 ){
        lvl5();
        lvl = 5;
    }
    if (score >= 15000 && score < 21000 ){
        lvl6();
        lvl = 6;
    }
    if (score >= 21000 && score < 28000 ){
        lvl7();
        lvl = 7;
    }
    if (score >= 28000 && score < 36000 ){
        lvl8();
        lvl = 8;
    }
    if (score >= 36000 && score < 45000 ){
        lvl9();
        lvl = 9;
    }
    if (score >= 45000){
        lvl10();
        lvl = 10
    }

}

function lvl1(){
    enemy1Speed = 3;
    enemy1Total = 3;
    scoreMult = 1;
}

function lvl2(){
    enemy1Speed = 4;
    enemy1Total = 3;
    scoreMult = 2;
}

function lvl3(){
    enemy1Speed = 5;
    enemy1Total = 3;
    scoreMult = 3;
}

function lvl4(){
    enemy1Speed = 6;
    enemy1Total = 3;
    scoreMult = 4;
}

function lvl5(){
    enemy1Speed = 7;
    enemy1Total = 3;
    scoreMult = 5;
}

function lvl6(){
    enemy1Speed = 8;
    enemy1Total = 3;
    scoreMult = 6;
}

function lvl7(){
    enemy1Speed = 9;
    enemy1Total = 3;
    scoreMult = 7;
}

function lvl8(){
    enemy1Speed = 10;
    enemy1Total = 3;
    scoreMult = 8;
}

function lvl9(){
    enemy1Speed = 11;
    enemy1Total = 3;
    scoreMult = 9;
}

function lvl10(){
    enemy1Speed = 12;
    enemy1Total = 3;
    scoreMult = 10;
}