function Sprites(){
	var spriteList = [];
	var sheetList = [];
	var currentId = 0;
	
	this.addSheet = function(sheetData){
		var sheet = new Sheet(sheetData);
		sheetList.splice(sheetData.id,0,sheet);
		return sheetData.id;
	};
	this.getSheetList = function(){
		return sheetList;
	}
	this.removeSheet = function(sheetId){
		return sheetList.splice(sheetId,1);
	};
	this.getSpriteList = function(){
		return spriteList;
	}
	this.addSprite = function(sheetId, spriteData){
		var sprite = new Sprite(sheetId, spriteData);
		spriteList.splice(currentId,0,sprite);
		return currentId++;
	}
	this.removeSprite = function(spriteId){
		return spriteList.splice(spriteId,1);
	};
}