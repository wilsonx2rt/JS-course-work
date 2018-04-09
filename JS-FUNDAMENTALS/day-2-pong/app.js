/* ********************************* GAME *********************************** */
function Game() {
  this.canvas = document.querySelector('#cvs');
  this.ctx = this.canvas.getContext('2d');
  this.ball = new Ball(10, [10, 10]);
  this.lPaddle = new Paddle([5, this.canvas.height / 2.5], [10, 100], 'left');
  this.rPaddle = new Paddle([585, this.canvas.height / 2.5], [10, 100], 'right');

  this.detectCollisions = () => {
    const radius = this.ball.radius;
    const ballX = this.ball.posX;
    const ballY = this.ball.posY;
    const lPaddleX = this.lPaddle.posX;
    const lPaddleY = this.lPaddle.posY;
    const paddleDimY = this.lPaddle.dimY;
    const rPaddleX = this.rPaddle.posX;
    const rPaddleY = this.rPaddle.posY;

    if (
      ballX - radius === lPaddleX &&
      ballY >= lPaddleY &&
      ballY <= lPaddleY + paddleDimY ||
      ballX + radius === rPaddleX &&
      ballY >= rPaddleY &&
      ballY <= rPaddleY + paddleDimY) {
      this.ball.velX = -this.ball.velX;
    }
    /*
    || this.ball.posX + this.ball.radius >=
    this.lPaddle.posX && this.ball.posY + this.ball.radius <= this.lPaddle.posX + this.lPaddle.dimX
    */
  };

  this.renderDashedLine = (context) => {
    context.setLineDash([10, 5]);
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(this.canvas.width / 2, 10);
    context.lineTo(this.canvas.width / 2, this.canvas.height - 10);
    context.strokeStyle = '#55b936';
    context.stroke();
  };

  this.resetCanvas = () => {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, 600, 500);
    this.renderDashedLine(this.ctx);
    this.lPaddle.render(this.ctx);
    this.rPaddle.render(this.ctx);
    this.ball.render(this.ctx);
    this.lPaddle.move();
    this.rPaddle.move();
    this.ball.move();
    this.detectCollisions();
  };

  this.play = () => {
    setInterval(() => {
      this.resetCanvas();
    }, 1000 / 60);
  };
}

const game = new Game();
game.play();
