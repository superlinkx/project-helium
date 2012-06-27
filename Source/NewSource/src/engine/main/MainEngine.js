function MainEngine(){
	var canvas = null;
	this.Sprites = new Sprites();
	
	this.setCanvas = function(newCanvas){
		canvas = newCanvas;
	};
	this.getCanvas = function(){
		return canvas;
	};
}