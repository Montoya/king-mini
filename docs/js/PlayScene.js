var PlayScene = new Phaser.Scene('Play');

PlayScene.preload = function() {
};

PlayScene.create = function() {
	this.add.image(220, 300, 'board');
	this.add.image(180, 260, 'king');
	this.add.image(140, 220, 'bishop');
	this.add.text(0, 0, 'King Mini', {font:'32px PT Serif', fill:'#000'});
};

PlayScene.update = function() {

};