// Import outside libraries
const Phaser = require('phaser');

const player = {
  x: 400,
  y: 300,
  radius: 10
};

// Phaser setup
function create () {
  graphics = this.add.graphics({
    fillStyle: { color: 0xeeeeee },
    lineStyle: { width: 3, color: 0xeeeeee },
  });
}

function update(totalTime, deltaTime) {
  player.x += 20 * deltaTime / 1000;

  // Always clear at the top of update
  graphics.clear();

  graphics.save();
  graphics.translate(player.x, player.y);
  graphics.fillCircle(0, 0, player.radius);
  graphics.restore();
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
