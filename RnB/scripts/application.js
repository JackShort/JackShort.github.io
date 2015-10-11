function loadGame() {
	var game_manager = new GameManager(4);

	document.getElementById('grid-container').addEventListener('click', function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		var id = target.id;

		if (!isNaN(id) && id != null && id != '') {
			game_manager.clickedTile(id);
		}
	});
}