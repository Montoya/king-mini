var PreloadScene = new Phaser.Scene('Preload');

PreloadScene.preload = function() {
	this.load.image('board', 'assets/game_board.png');
	this.load.spritesheet('piece', 'assets/pieces.png', { frameWidth: 80, frameHeight: 80, endFrame: 3 }); 
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