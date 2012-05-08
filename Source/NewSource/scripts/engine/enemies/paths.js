/**
* Copyright 2011 Steven Holms <superlinkx@gmail.com>
*
*	MIT License:
*	
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
* is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
* OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function Path(path){
	switch(path){
		case 0: pathSize = (width/20)*0;
			break;
		case 1: pathSize = (width/20);
			break;
		case 2: pathSize = (width/20)*2;
			break;
		case 3: pathSize = (width/20)*3;
			break;
		case 4: pathSize = (width/20)*4;
			break;
		case 5: pathSize = (width/20)*5;
			break;
		case 6: pathSize = (width/20)*6;
			break;
		case 7: pathSize = (width/20)*7;
			break;
		case 8: pathSize = (width/20)*8;
			break;
		case 9: pathSize = (width/20)*9;
			break;
		case 10: pathSize = (width/20)*10;
			break;
		case 11: pathSize = (width/20)*11;
			break;
		case 12: pathSize = (width/20)*12;
			break;
		case 13: pathSize = (width/20)*13;
			break;
		case 14: pathSize = (width/20)*14;
			break;
		case 15: pathSize = (width/20)*15;
			break;
		case 16: pathSize = (width/20)*16;
			break;
		case 17: pathSize = (width/20)*17;
			break;
		case 18: pathSize = (width/20)*18;
			break;
		case 19: pathSize = (width/20)*19;
			break;
		default: pathSize = (width/20)*0;
			break;
		}
	return pathSize;
}