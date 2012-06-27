function Sheet(sheetData) {
  	var data = sheetData;
	this.panelSizeX = data.panelSizeX;
	this.panelSizeY = data.panelSizeY;
	this.panelsX = data.panelsX;
	this.panelsY = data.panelsY;
	this.imageSrc = data.srcImage;
	
	this.image = new Image();
	this.image.src = imageSrc;
}
