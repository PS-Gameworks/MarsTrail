var introState = new Kiwi.State('introState');

introState.create = function () {
    Kiwi.State.prototype.create.call(this);

    // load intro states, images, and background.
    this.introBackground = new Kiwi.GameObjects.StaticImage(this, this.textures['introBackground'], 0, 0);
    this.ship = new Kiwi.GameObjects.Sprite(this, this.textures['basicShipSprites'], 450, 300);

    // load the ship animations.
    // Help Text: 1, 2, 3, etc. are the cells, they roll over after it hits the end.
    // Personal Note: each "object", I.E. Ship can contain multiple animations, I.E. MoveEngineStart, MoveEngineCruise, MoveEngineOff
    this.ship.animation.add('moveEngineStart', [7, 8, 7, 6], 0.5, true);

    // play the ship animation
    this.ship.animation.play('moveEngineStart');

    this.mouse = this.game.input.mouse;
    this.message = new Kiwi.GameObjects.Textfield(this, "Welcome to Mars Trail\nClick here to start!", 0, 0, '#FFF');

    // this is loaded in order, (background z-index 0, message z-index 1, ship z-index 2, etc.)
    this.addChild(this.introBackground);
    this.addChild(this.message);
    this.addChild(this.ship);
	
	//game restarted/started
	//clear global game logic variables
	clearedField = false;
}

introState.update = function () {
    Kiwi.State.prototype.update.call(this);
    if (this.mouse.isDown) {
        this.mouse.reset();
        this.game.states.switchState("puzzleState");
    }
};