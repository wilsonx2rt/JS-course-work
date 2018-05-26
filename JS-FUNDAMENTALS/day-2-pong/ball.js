/* ********************************* BALL *********************************** */
function Ball(radius, position) {
  this.radius = radius;
  [this.posX, this.posY] = [position[0], position[1]];
  this.velX = 5;
  this.velY = 5;
  this.render = context => {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#55b936';
    context.fill();
  };
  this.move = () => {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posY === 0 || this.posY === 500) {
      this.velY = -this.velY;
    }
    if (this.posX === 0 || this.posX === 600) {
      this.velX = -this.velX;
    }
  };
}
