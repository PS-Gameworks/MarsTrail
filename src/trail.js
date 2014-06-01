var game = new Kiwi.Game();
game.states.addState(loadState);
game.states.addState(introState);
game.states.addState(menuState);
game.states.addState(gameoverState);
game.states.addState(creditsState);
game.states.addState(travelState);
game.states.switchState("loadState");