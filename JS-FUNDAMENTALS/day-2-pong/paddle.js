/* ********************************* PADDLE *********************************** */
function Paddle(position, dimensions, side) {
  [this.posX, this.posY] = [position[0], position[1]];
  [this.dimX, this.dimY] = [dimensions[0], dimensions[1]];
  this.direction = 0;
  this.speed = 7;
  this.side = side;

  this.render = (context) => {
    context.beginPath();
    context.rect(this.posX, this.posY, this.dimX, this.dimY);
    context.fillStyle = '#55b936';
    context.fill();
  };

  this.move = () => {
    this.posY += this.direction;
    // prevent paddle from going past top border
    if (this.posY <= 0) {
      this.posY = 0;
    } else if (this.posY >= 500 - this.dimY) {
      this.posY = 500 - this.dimY;
    }
  };

  document.addEventListener('keydown', (e) => {
    if (this.side === 'left') {
      // console.log('hey');
      if (e.key === 'q') this.direction = -this.speed;
      if (e.key === 'a') this.direction = this.speed;
    } else {
      if (e.key === 'p') this.direction = -this.speed;
      if (e.key === 'l') this.direction = this.speed;
    }
  }); // in not using arrow function context must be bound on callback of event listener .bind(this)

  document.addEventListener('keyup', (e) => {
    if (this.side === 'left' && (e.key === 'q' || e.key === 'a')) this.direction = 0;
    if (this.side !== 'left' && (e.key === 'p' || e.key === 'l')) this.direction = 0;
  });
}
