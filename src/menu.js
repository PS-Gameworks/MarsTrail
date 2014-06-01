var menuState = new Kiwi.State('menuState');

menuState.create = function(){
    Kiwi.State.prototype.create.call(this);
	this.mouse = this.game.input.mouse;
	this.message = new Kiwi.GameObjects.Textfield(this, "Welcome to Main Menu -- Click here to continue!", 0, 0);
	this.addChild(this.message);
}

menuState.update = function(){
   Kiwi.State.prototype.update.call(this);
   if (this.mouse.isDown) {
		this.mouse.reset();
		this.game.states.switchState("travelState");
   }
};