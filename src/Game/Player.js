class Player {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
  }

  update(dt) {
    this.x += this.speed * dt / 1000;
  }

  draw(graphics) {
    graphics.save();
    graphics.translate(this.x, this.y);
    graphics.fillCircle(0, 0, this.radius);
    graphics.restore();
  }
}

module.exports = Player;
