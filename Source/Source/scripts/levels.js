/**
* @preserve Copyright 2011
* Project Helium and all its contents are copyrighted by Steven Holms <superlinkx>.
* All rights reserved.
* Do not distribute without permission.
*/
function lvlchecker(){
	switch(sc0re){
		case 0: lvl = 1;
			break;
		case 1000: lvl = 2;
			break;
		case 2000: lvl = 3;
			break;
		case 3000: lvl = 4;
			break;
		case 4000: lvl = 5;
			break;
		case 5000: lvl = 6;
			break;
		case 6000: lvl = 7;
			break;
		case 7000: lvl = 8;
			break;
		case 8000: lvl = 9;
			break;
		case 9000: lvl = 10;
			break;
		default: break;
	}
	switch(lvl){
		case 1:
			enemy1Speed = 3;
			enemy1Total = 8;
			sc0reMult = 1;
			break;
		case 2:
			enemy1Speed = 4;
			enemy1Total = 9;
			sc0reMult = 1;
			break;
		case 3:
			enemy1Speed = 5;
			enemy1Total = 10;
			sc0reMult = 1;
			break;
		case 4:
			enemy1Speed = 6;
			enemy1Total = 11;
			sc0reMult = 1;
			break;
		case 5:
			enemy1Speed = 7;
			enemy1Total = 12;
			sc0reMult = 1;
			break;
		case 6:
			enemy1Speed = 8;
			enemy1Total = 13;
			sc0reMult = 1;
			break;
		case 7:
			enemy1Speed = 9;
			enemy1Total = 14;
			sc0reMult = 1;
			break;
		case 8:
			enemy1Speed = 10;
			enemy1Total = 15;
			sc0reMult = 1;
			break;
		case 9:
			enemy1Speed = 11;
			enemy1Total = 16;
			sc0reMult = 1;
			break;
		case 10:
			enemy1Speed = 12;
			enemy1Total = 17;
			sc0reMult = 1;
			break;
	}
}