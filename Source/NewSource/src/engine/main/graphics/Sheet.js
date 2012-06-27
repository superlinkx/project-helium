function Sheet(sheetData) {
  var data = sheetData;
  this.id = data.id;
	this.panelSizeX = data.panelSizeX;
	this.panelSizeY = data.panelSizeY;
	this.panelsX = data.panelsX;
	this.panelsY = data.panelsY;
	this.srcImage = data.srcImage;
	
	this.image = new Image();
	this.image.src = this.srcImage;
}
