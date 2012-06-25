function Background(type,game){
	var position = 0;
	var color = type.color;
	var lineColor = type.lineColor;
	var gridSize = type.gridSize;
	var increment = type.increment;
	this.grid = function(){
		if(position===gridSize){
			position = 0;
		}
		game.context.fillStyle = color;
		game.context.fillRect(0,0,game.width,game.height);
	  game.context.beginPath();
		game.context.strokeStyle = lineColor;
		for(i=increment;i<=game.width+increment;i+=gridSize){
			game.context.moveTo(i,0);
			game.context.lineTo(i,game.height);
			if(i===game.width+increment){
				game.context.moveTo(i-1,0);
				game.context.lineTo(i-1,game.height);
			}
		}
		for(i=position;i<=game.height;i+=gridSize){
			game.context.moveTo(0,i);
			game.context.lineTo(game.width,i);
		}
		game.context.stroke();
		position+=1;
	};
}