var travelState = new Kiwi.State('travelState');

travelState.create = function(){
    Kiwi.State.prototype.create.call(this);
	this.mouse = this.game.input.mouse;
	this.message = new Kiwi.GameObjects.Textfield(this, "You're almost there! Click on Mars to land your ship!", 0, 0);
	this.mars = new Kiwi.GameObjects.StaticImage(this, this.textures['mars'], 100, 100);
	this.addChild(this.message);
	this.addChild(this.mars);
}

travelState.update = function(){
   Kiwi.State.prototype.update.call(this);
   if (this.mouse.isDown && this.mars.box.bounds.contains(this.mouse.x, this.mouse.y, true)) {
		this.message.text = "YOU HAVE DIED OF... DYSENTERY";
		this.mouse.reset();
		this.game.states.switchState("creditsState");
   }
   else if(this.mouse.isDown)
   {
		this.mouse.reset();
		this.game.states.switchState("gameoverState");
   }
};