var Synthcraft = Synthcraft || {};

Synthcraft.Game = {};

Synthcraft.Game.init = function(){
	
	this.player = Synthcraft.Player;
	this.player.init({
		health: 50,
		volts: 5,
		ohms: 5,
		flux: 5,
		scraps: 0,
		photonCells: 0
	});

};

Synthwave.Game.init();