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
function keyDown(e){
	e.preventDefault();
	if(e.keyCode == 39) rightKey = true;
	else if(e.keyCode == 37) leftKey = true;
	if(e.keyCode == 38) upKey = true;
	else if(e.keyCode == 40) downKey = true;
	if(e.keyCode == 32) laserKey = true;
	if(e.keyCode == 13) enterKey = true;
	if(e.keyCode == 191) pauseGame();
}
function keyUp(e){
	e.preventDefault();
	if(e.keyCode == 39) rightKey = false;
	else if(e.keyCode == 37) leftKey = false;
	if(e.keyCode == 38) upKey = false;
	else if(e.keyCode == 40) downKey = false;
	if(e.keyCode == 32) laserKey = false;
	if(e.keyCode == 13) enterKey = false;
}