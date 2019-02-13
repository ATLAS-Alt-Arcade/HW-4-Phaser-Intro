// Import outside libraries
const Phaser = require('phaser');
const Player = require('./Player');

const p1 = new Player(400, 300, 10, 100);

// Phaser setup
function create () {
  cursors = this.input.keyboard.createCursorKeys();
  graphics = this.add.graphics({
    fillStyle: { color: 0xeeeeee },
    lineStyle: { width: 3, color: 0xeeeeee },
  });
}

function update(totalTime, deltaTime) {
  p1.update(deltaTime);

  // Always clear at the top of update
  graphics.clear();
  p1.draw(graphics);
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      create: create,
      update: update
  }
};

let game;
  
// Exported Module so game can be initialized elseware
const GameManager = {
  init: () => {
    game = new Phaser.Game(config);
  },
};

module.exports = GameManager;
