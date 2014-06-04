var loadState = new Kiwi.State('loadState');
var preloader = new Kiwi.State('preloader');

//preload
preloader.preload = function(){
    Kiwi.State.prototype.preload.call(this);
    this.addImage('loadingImage', 'img/kiwilogo.png', true);
}
preloader.create = function(){
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState('loadState');
}

//asset loading
loadState.preload = function(){
    Kiwi.State.prototype.preload.call(this);
	this.logo = new Kiwi.GameObjects.StaticImage(this, this.textures['loadingImage'], 150, 50);
    this.addChild(this.logo);
    this.addImage('mars','img/mars.png');
    this.addImage('mars_menu_bg','img/mars_menu_bg.jpg');
	this.addAudio('bgm', 'snd/asteroid_bummin.mp3');
    this.game.stage.resize(900, 600);
}

loadState.create = function(){
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState('introState');
	this.backgroundMusic = new Kiwi.Sound.Audio(this.game, 'bgm', 0.5, true);
	this.backgroundMusic.play();
}
