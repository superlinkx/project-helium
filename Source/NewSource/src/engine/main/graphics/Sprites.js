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
function Sprites(){
	//Properties
	var spriteList = []; //Array of current sprite objects
	var sheetList = []; //Array of all sprite sheets
	var currentId = 0; //used for setting sprite object indices
	
	//Methods
	//Add new sprite sheet
	this.addSheet = function(sheetData){
		var sheet = new Sheet(sheetData);
		sheetList.splice(sheetData.id,0,sheet);
		return sheetData.id;
	};
	//Get list of sprite sheets
	this.getSheetList = function(){
		return sheetList;
	}
	//remove specified sprite sheet
	this.removeSheet = function(sheetId){
		return sheetList.splice(sheetId,1);
	};
	//Get list of sprite objects
	this.getSpriteList = function(){
		return spriteList;
	}
	//Add a new sprite object
	this.addSprite = function(sheetId, spriteData){
		var sprite = new Sprite(sheetId, spriteData);
		spriteList.splice(currentId,0,sprite);
		return currentId++;
	}
	//remove specified sprite object
	this.removeSprite = function(spriteId){
		return spriteList.splice(spriteId,1);
	};
}