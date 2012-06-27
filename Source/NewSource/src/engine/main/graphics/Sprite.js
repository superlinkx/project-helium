function Sprite(spriteData){
	var data = spriteData;
	var sheet = data.sheet;
	var panelSizeX = data.panelSizeX;
	var panelSizeY = data.panelSizeY;
	var panelsX = data.panelsX;
	var panelsY = data.panelsY;
	var animationsCount = data.animationsCount;
	
	this.getData = function(){
		return [sheet,panelSizeX,panelSizeY,panelsX,panelsY,animationsCount];
	};
}