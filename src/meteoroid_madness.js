var meteorState = new Kiwi.State('meteorState');

meteorState.create = function(){
    Kiwi.State.prototype.create.call(this);
	this.mouse = this.game.input.mouse;
	this.message = new Kiwi.GameObjects.Textfield(this, "meteor!", 0, 0);
	this.addChild(this.message);
}

meteorState.update = function(){
   Kiwi.State.prototype.update.call(this);
   if (this.mouse.isDown) {
		this.mouse.reset();
		this.game.states.switchState("travelState");
   }
};