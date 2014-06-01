var gameoverState = new Kiwi.State('gameoverState');

gameoverState.create = function(){
    Kiwi.State.prototype.create.call(this);
	this.mouse = this.game.input.mouse;
	this.message = new Kiwi.GameObjects.Textfield(this, "YOU DIED FROM DYSENTERY -- Click to restart!", 0, 0);
	this.addChild(this.message);
}

gameoverState.update = function(){
   Kiwi.State.prototype.update.call(this);
   if (this.mouse.isDown) {
		this.mouse.reset();
		this.game.states.switchState("introState");
   }
};