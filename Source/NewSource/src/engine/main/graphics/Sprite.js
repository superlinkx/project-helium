function Sprite(sheetId,spriteData){
	var data = spriteData;
	var animationsCount = data.animationsCount;
	var animations = [];
	
	this.getSheetId = function(){
		return sheetId;
	};
}