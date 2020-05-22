var PreloadScene = new Phaser.Scene('Preload');

PreloadScene.preload = function() {
	this.load.image('board', 'assets/game_board.png');
	this.load.image('king', 'assets/king.png');
	this.load.image('knight', 'assets/knight.png');
	this.load.image('bishop', 'assets/bishop.png');
	this.load.image('rook', 'assets/rook.png');
	this.load.script('webfont', 'js/webfontloader.js');
};

PreloadScene.create = function() {
	var that = this; 
	WebFont.load( { 
		custom: { 
			families: [ 'Marcellus SC' ]
		}, 
		active: function() { 
			that.scene.start('Menu');
		}
	} ); 
};

PreloadScene.update = function() {

};