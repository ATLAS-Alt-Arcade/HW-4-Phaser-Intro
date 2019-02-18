class Player {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.moveSpeed = 100;
  }

  setX(newX) {
    this.x = newX;
  }
  
  setY(newY) {
    this.y = newY;
  }

  update(deltaTime, keys) {
    // Player Movement
    if (keys.left.isDown) {
      this.x -= this.moveSpeed * deltaTime / 1000
    }
    else if (keys.right.isDown) {
      this.x += this.moveSpeed * deltaTime / 1000
    }
    else if (keys.up.isDown) {
      this.y -= this.moveSpeed * deltaTime / 1000
    }
    else if (keys.down.isDown) {
      this.y += this.moveSpeed * deltaTime / 1000
    }
  }

  draw(graphics) {
    graphics.save();
    graphics.translate(this.x, this.y);
    graphics.fillCircle(0, 0, this.radius);
    graphics.restore();
  }
}

module.exports = Player;
