function Sprites(){
	var spriteList = [];
	var currentId = 0;
	
	this.createNew = function(spriteData){
		var sprite = new Sprite(spriteData);
		spriteList.splice(currentId,0,sprite);
		return currentId++;
	}
	this.removeSprite = function(spriteId){
		return spriteList.splice(spriteId,1);
	};
}