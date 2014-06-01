var loadState = new Kiwi.State('loadState');

loadState.preload = function(){
    Kiwi.State.prototype.preload.call(this);
  	this.addImage('mars','img/mars.png');
}

loadState.create = function(){
    Kiwi.State.prototype.create.call(this);
	this.game.states.switchState("introState");
}
