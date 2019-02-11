// Import outside libraries
const Phaser = require('phaser');

// Engivronment
let game;
let graphics;
let keys;
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
};

// Game State
let xPos = 400;
let yPos = 300;
const speed = 100;

// Phaser setup
function create () {
  keys = this.input.keyboard.createCursorKeys();
  graphics = this.add.graphics({
    fillStyle: { color: 0xeeeeee },
    lineStyle: { width: 3, color: 0xeeeeee },
  });
}

function update(totalTime, deltaTime) {
  // Player Movement
  if (keys.left.isDown) {
    xPos -= speed * deltaTime / 1000;
  }
  else if (keys.right.isDown) {
    xPos += speed * deltaTime / 1000;
  }
  else if (keys.up.isDown) {
    yPos -= speed * deltaTime / 1000;
  }
  else if (keys.down.isDown) {
    yPos += speed * deltaTime / 1000;
  }

  // Keep player on screen
  if (xPos > config.width + 5) {
    xPos = 0;
  }

  if (xPos < -5) {
    xPos = config.width - 5;
  }

  if (yPos > config.height + 5) {
    yPos = 0;
  }

  if (yPos < -5) {
    yPos = config.height - 5;
  }

  // Always clear at the top of update
  graphics.clear();

  graphics.save();
  graphics.translate(xPos, yPos);
  graphics.fillCircle(0, 0, 10);
  graphics.restore();
}

config.scene = {
  create: create,
  update: update
};
  
// Exported Module so game can be initialized elseware
const GameManager = {
  init: () => {
    game = new Phaser.Game(config);
  },
};

module.exports = GameManager;
