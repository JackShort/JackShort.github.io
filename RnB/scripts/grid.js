function Grid(size) {
	this.size = size;
	this.cells = this.empty();
}

//Creates empty grid
Grid.prototype.empty = function() {
	var cells = [];

	for (var r = 0; r < this.size; r++) {
		cells[r] = [];

		for (var y = 0; y < this.size; y++) {
			cells[r].push(null);
		}
	}

	return cells;
};

//Inserts a tile into the given position
Grid.prototype.insertTile = function(tile) {
	this.cells[tile.row][tile.col] = tile;
	this.update();
};

//Get tile from with id
Grid.prototype.getTileWithId = function(id) {
	var row = Math.floor(id / 4);
	var col = id % 4;

	var cell = this.cells[row][col];
	return cell;
}

//Update the tiles
Grid.prototype.update = function() {
	for (var r = 0; r < this.size; r++) {
		for (var c = 0; c < this.size; c++) {
			var id = (r * 4) + (c);
			if (this.cells[r][c] != null) {
				document.getElementById(id).className = ['grid-cell-red', 'grid-cell-blue'][this.cells[r][c].value];
			}
		}
	}
}

//Change the tiles on click
Grid.prototype.changeTilesWithCenterTile = function(tile) {
	//changes it to the opposite number
	this.cells[tile.row][tile.col].value = [1, 0][tile.value];

	// var cellUpLeft = this.cells[tile.row - 1][tile.col - 1];
	// var cellUpMiddle = this.cells[tile.row - 1][tile.col];
	// var cellUpRight = this.cells[tile.row - 1][tile.col + 1];

	// var cellLeft = this.cells[tile.row][tile.col - 1];
	// var cellRight = this.cells[tile.row][tile.col + 1];

	// var cellDownLeft = this.cells[tile.row + 1][tile.col - 1];
	// var cellDownMiddle = this.cells[tile.row + 1][tile.col];
	// var cellDownRight = this.cells[tile.row + 1][tile.col + 1];

	//Upper Left
	if ((tile.row - 1 >= 0) && (0 <= tile.col - 1 <= 3)  && (this.cells[tile.row - 1][tile.col - 1] == null)) {
		this.cells[tile.row - 1][tile.col - 1] = new Tile(tile.row - 1, tile.col - 1, tile.value)
	} else if ((tile.row - 1 >= 0) && (0 <= tile.col - 1 <= 3)) {
		this.cells[tile.row - 1][tile.col - 1].value = [1, 0][this.cells[tile.row - 1][tile.col - 1].value];
	}

	//Upper Middle
	if ((tile.row - 1 >= 0) && (0 <= tile.col <= 3)  && (this.cells[tile.row - 1][tile.col] == null)) {
		this.cells[tile.row - 1][tile.col] = new Tile(tile.row - 1, tile.col, tile.value)
	} else if ((tile.row - 1 >= 0) && (0 <= tile.col <= 3)) {
		this.cells[tile.row - 1][tile.col].value = [1, 0][this.cells[tile.row - 1][tile.col].value];
	}

	//Upper Right
	if ((tile.row - 1 >= 0) && (0 <= tile.col + 1 <= 3)  && (this.cells[tile.row - 1][tile.col + 1] == null)) {
		this.cells[tile.row - 1][tile.col + 1] = new Tile(tile.row - 1, tile.col + 1, tile.value)
	} else if ((tile.row - 1 >= 0) && (0 <= tile.col + 1 <= 3)) {
		this.cells[tile.row - 1][tile.col + 1].value = [1, 0][this.cells[tile.row - 1][tile.col + 1].value];
	}

	//Middle Left
	if ((tile.row >= 0) && (0 <= tile.col - 1 <= 3)  && (this.cells[tile.row][tile.col - 1] == null)) {
		this.cells[tile.row][tile.col - 1] = new Tile(tile.row, tile.col - 1, tile.value)
	} else if ((tile.row >= 0) && (0 <= tile.col - 1 <= 3)) {
		this.cells[tile.row][tile.col - 1].value = [1, 0][this.cells[tile.row][tile.col - 1].value];
	}

	//Middle Right
	if ((tile.row >= 0) && (0 <= tile.col + 1 <= 3)  && (this.cells[tile.row][tile.col + 1] == null)) {
		this.cells[tile.row][tile.col + 1] = new Tile(tile.row, tile.col + 1, tile.value)
	} else if ((tile.row >= 0) && (0 <= tile.col + 1 <= 3)) {
		this.cells[tile.row][tile.col + 1].value = [1, 0][this.cells[tile.row][tile.col + 1].value];
	}

	//Lower Left
	if ((0 <= (tile.row + 1)) && ((tile.row + 1) <= 3) && (0 <= tile.col - 1 <= 3)  && (this.cells[tile.row + 1][tile.col - 1] == null)) {
		this.cells[tile.row + 1][tile.col - 1] = new Tile(tile.row + 1, tile.col - 1, tile.value)
	} else if ((0 <= (tile.row + 1)) && ((tile.row + 1) <= 3) && (0 <= tile.col - 1 <= 3)) {
		this.cells[tile.row + 1][tile.col - 1].value = [1, 0][this.cells[tile.row + 1][tile.col - 1].value];
	}

	//Lower Middle
	if ((0 <= (tile.row + 1)) && ((tile.row + 1) <= 3) && (0 <= tile.col <= 3)  && (this.cells[tile.row + 1][tile.col] == null)) {
		this.cells[tile.row + 1][tile.col] = new Tile(tile.row + 1, tile.col, tile.value)
	} else if ((0 <= (tile.row + 1)) && ((tile.row + 1) <= 3) && (0 <= tile.col <= 3)) {
		this.cells[tile.row + 1][tile.col].value = [1, 0][this.cells[tile.row + 1][tile.col].value];
	}

	//Lower Right
	if ((0 <= (tile.row + 1)) && ((tile.row + 1) <= 3) && (0 <= tile.col + 1 <= 3)  && (this.cells[tile.row + 1][tile.col + 1] == null)) {
		this.cells[tile.row + 1][tile.col + 1] = new Tile(tile.row + 1, tile.col + 1, tile.value)
	} else if ((0 <= (tile.row + 1)) && ((tile.row + 1) <= 3) && (0 <= tile.col + 1 <= 3)) {
		this.cells[tile.row + 1][tile.col + 1].value = [1, 0][this.cells[tile.row + 1][tile.col + 1].value];
	}

	this.update();
}
