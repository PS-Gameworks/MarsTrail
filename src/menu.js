var menuState = new Kiwi.State('menuState');

menuState.create = function() {
    Kiwi.State.prototype.create.call(this);
    this.mouse = this.game.input.mouse;
    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['mars_menu_bg'], 0, 0);
    this.title = new Kiwi.GameObjects.Textfield(this, "THE MARS TRAIL", 150, 150, '#ffffff', 75, "bold");
    this.newGameText = new Kiwi.GameObjects.Textfield(this, "New Game", 380, 300, '#ffffff', 30, "bold");
    this.addChild(this.background);
    this.addChild(this.title);
    this.addChild(this.newGameText);
}

menuState.update = function() {
    Kiwi.State.prototype.update.call(this);
    if (this.mouse.isDown) {
        this.mouse.reset();
        this.game.states.switchState("travelState");
    }
};