// Import outside libraries
const Phaser = require('phaser');
const Player = require('./Player');

const phaserConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
};

const p1 = new Player(phaserConfig.width / 2, phaserConfig.height / 2, 10);

// Global Phaser Vars
let game;
let graphics;
let keys;

/**
 * Helper function for checking if two circles are colliding
 * 
 * @param {object} c1 : must have x, y, and radius property
 * @param {object} c2 : must have x, y, and radius property
 */
function isCircleCollision(c1, c2) {
  // Get the distance between the two circles
  const distSq = (c1.x - c2.x) * (c1.x - c2.x) + (c1.y - c2.y) * (c1.y - c2.y);
  const radiiSq = (c1.radius * c1.radius) + (c2.radius * c2.radius);

  // Returns true if the distance btw the circle's center points is less than the sum of the radii
  return (distSq < radiiSq);
}

// Phaser setup
function create () {
  keys = this.input.keyboard.createCursorKeys();
  graphics = this.add.graphics({
    fillStyle: { color: 0xeeeeee },
    lineStyle: { width: 3, color: 0xeeeeee },
  });
}

function update(totalTime, deltaTime) {
  p1.update(deltaTime, keys)

  // Keep player on screen
  if (p1.x > phaserConfig.width + 5) {
    p1.setX(0);
  }

  if (p1.x < -5) {
    p1.setX(phaserConfig.width - 5);
  }

  if (p1.y > phaserConfig.height + 5) {
    p1.setY(0);
  }

  if (p1.y < -5) {
    p1.setY(phaserConfig.height - 5);
  }

  // Always clear at the top of update
  graphics.clear();

  p1.draw(graphics);
}


phaserConfig.scene = {
  create: create,
  update: update
}
  
// Exported Module so game can be initialized elseware
const GameManager = {
  init: () => {
    game = new Phaser.Game(phaserConfig);
  },
};

module.exports = GameManager;
