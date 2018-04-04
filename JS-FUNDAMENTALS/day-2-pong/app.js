'use strict';
// ################# BALL
function Ball(radius, position) {
	this.radius = radius;
	this.x = position[0];
	this.y = position[1];
	this.velX = 5;
	this.velY = 5;
	this.render = function (context) {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = '#55b936';
		context.fill();
	};
	this.move = function() {
		this.x += this.velX;
		this.y += this.velY;
		if (this.y === 0 || this.y === 500) {
					this.velY = -this.velY;
				}
				if (this.x === 0 || this.x === 600) {
					this.velX = -this.velX;
				}
	};
}
// ################# PADDLE
function Paddle(position, dimensions, side) {
	this.posX = position[0];
	this.posY = position[1];
	this.dimX = dimensions[0];
	this.dimY = dimensions[1];
	this.direction = 0;
	this.speed = 7;
	this.side = side; 
	
	this.render = function(context) {
		context.beginPath();
		context.rect(this.posX, this.posY, this.dimX, this.dimY);
		context.fillStyle = '#55b936';
		context.fill();
	};

	this.move = function() {
		this.posY += this.direction;
		// prevent paddle from going past top border
		if (this.posY <= 0) {
			this.posY = 0;
		} else if (this.posY >= 500 - this.dimY) {
			this.posY = 500 - this.dimY;
		}
	}
	document.addEventListener('keydown', function (e) {
    if(this.side === 'left') {
			// console.log('hey');
      if (e.key === 'q') this.direction = -this.speed;
      if (e.key === 'a') this.direction = this.speed;
    } else {
      if (e.key === 'p') this.direction = -this.speed;
      if (e.key === 'l') this.direction = this.speed;
    }
  }.bind(this));

  document.addEventListener('keyup', function (e) {
    if (this.side === 'left' && (e.key === 'q' || e.key === 'a')) this.direction = 0;
    if (this.side !== 'left' && (e.key === 'p' || e.key === 'l')) this.direction = 0;
  }.bind(this));
}
// ################# GAME
function Game() {
	this.canvas = document.querySelector('#cvs');
	this.ctx = this.canvas.getContext('2d');
	this.ball = new Ball(10, [10, 10]);
	this.lPaddle = new Paddle([10, this.canvas.height / 2.5], [10, 100], 'left');
	this.rPaddle = new Paddle([580, this.canvas.height / 2.5], [10, 100], 'right');

	this.resetCanvas = function() {
		this.ctx.fillStyle = '#000';
		// this.setDahsedLine();
		this.ctx.fillRect(0, 0, 600, 500);
	};
	
	this.play = function() {
		setInterval(function() {
			this.resetCanvas();
			this.lPaddle.render(this.ctx);
			this.rPaddle.render(this.ctx);
			this.ball.render(this.ctx);
			this.lPaddle.move();
			this.rPaddle.move();
			this.ball.move();
		}.bind(this), 1000/60);
	};
}


var game = new Game();
game.play();