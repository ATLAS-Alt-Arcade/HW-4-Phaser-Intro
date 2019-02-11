// Import outside libraries
const Phaser = require('phaser');

let xPos = 0;
let yPos = 300;

// Phaser setup
function create () {
  cursors = this.input.keyboard.createCursorKeys();
  graphics = this.add.graphics({
    fillStyle: { color: 0xeeeeee },
    lineStyle: { width: 3, color: 0xeeeeee },
  });
}

function update(totalTime, deltaTime) {
  xPos += 20 * deltaTime / 1000;

  // Always clear at the top of update
  graphics.clear();

  graphics.save();
  graphics.translate(xPos, 300);
  graphics.fillCircle(0, 0, 5);
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
