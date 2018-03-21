var Synthcraft = Synthcraft || {};

Synthcraft.Player = {};

Synthcraft.Player.init = function(stats){
	this.health = stats.health;
	this.volts = stats.volts;
	this.ohms = stats.ohms;
	this.flux = stats.flux;
	this.scraps = stats.scraps;
	this.photonCells = stats.photonCells;
		
};