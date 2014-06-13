var puzzleState = new Kiwi.State('puzzleState');

puzzleState.create = function () {
    Kiwi.State.prototype.create.call(this);

    // load puzzle state, images, and background.
    this.puzzleBackground = new Kiwi.GameObjects.StaticImage(this, this.textures['puzzleBackground'], 0, 0);
	this.scanlines = new Kiwi.GameObjects.Sprite(this, this.textures['scanlines'], 0, 0);
	this.scanlines.alpha = 0.3;
	this.puzzleMap = new Kiwi.GameObjects.Tilemap.TileMap(this, 'puzzleMap', this.textures.pipeSprites);

    // load animations
    this.scanlines.animation.add('cycleScanlines', [0, 0, 0, 1, 1, 0, 0, 1], 0.05, true);

    // play animation
    this.scanlines.animation.play('cyclePipes');

    this.mouse = this.game.input.mouse;
    this.message = new Kiwi.GameObjects.Textfield(this, "WHOA SOMETHINGS BROKE\nPLZ FIX", 0, 0, '#FFF');

    // this is loaded in order, (background z-index 0, message z-index 1, pipe z-index 2, etc.)
    this.addChild(this.puzzleBackground);
    this.addChild(this.message);
	this.addChild(this.puzzleMap.layers[0]);
	this.addChild(this.puzzleMap.layers[1]);
	this.addChild(this.scanlines);
	
	//game restarted/started
	//clear global game logic variables
	clearedField = false;
}

puzzleState.update = function () {
    Kiwi.State.prototype.update.call(this);
    if (this.mouse.isDown) {
        this.mouse.reset();
        this.game.states.switchState("menuState");
    }
};