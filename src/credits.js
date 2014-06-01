var creditsState = new Kiwi.State('creditsState');

creditsState.create = function(){
    Kiwi.State.prototype.create.call(this);
	this.mouse = this.game.input.mouse;
	this.message = new Kiwi.GameObjects.Textfield(this, "Brought to you by Ovaltine -- Click here to play again!", 0, 0);
	this.addChild(this.message);
}

creditsState.update = function(){
   Kiwi.State.prototype.update.call(this);
   if (this.mouse.isDown) {
		this.mouse.reset();
		this.game.states.switchState("introState");
   }
};