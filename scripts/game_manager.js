function GameManager(size) {
	this.size = size
	this.startTiles = 1;

	this.setup();
}

//Setup the game
GameManager.prototype.setup = function() {
	this.grid = new Grid(this.size);
	this.score = 0;
	this.over = false;
	this.won = false;

	//initiate tiles
	this.addStartTiles();
}

//Add Start Tiles
GameManager.prototype.addStartTiles = function() {
	for (var i = 0; i < this.startTiles; i++) {
		this.addRandomTile();
	}
}

//Adds tile to grid in random position and number of one or zero
GameManager.prototype.addRandomTile = function() {
	var value = Math.round(Math.random());
	var row = Math.floor(Math.random() * 4);
	var col = Math.floor(Math.random() * 4);

	var tile = new Tile(row, col, value)
	this.grid.insertTile(tile);
}

//Onclick tile
GameManager.prototype.clickedTile = function(id) {
	var tile = this.grid.getTileWithId(id);

	if (tile != null) {
		this.grid.changeTilesWithCenterTile(tile);
	}
};