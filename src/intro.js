var introState = new Kiwi.State('introState');

introState.create = function(){
    Kiwi.State.prototype.create.call(this);
	this.mouse = this.game.input.mouse;
	this.message = new Kiwi.GameObjects.Textfield(this, "Welcome to Mars Trail\nClick here to start!", 0, 0);
	this.addChild(this.message);
}

introState.update = function(){
   Kiwi.State.prototype.update.call(this);
   if (this.mouse.isDown) {
		this.mouse.reset();
		this.game.states.switchState("menuState");
   }
};