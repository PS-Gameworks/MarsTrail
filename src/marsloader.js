var loadState = new Kiwi.State('loadState');

loadState.preload = function(){
    Kiwi.State.prototype.preload.call(this);
    this.addImage('mars','img/mars.png');
    this.addImage('mars_menu_bg','img/mars_menu_bg.jpg');
    this.game.stage.resize(900, 600);
}

loadState.create = function(){
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState("introState");
}
