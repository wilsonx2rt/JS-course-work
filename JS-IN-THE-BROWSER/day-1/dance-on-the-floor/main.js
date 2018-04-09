class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.count = 1;
    this.currentCellId = null;
    this.$grid = $('<div />').appendTo('body').attr('class', 'grid');
    this.makeGrid = this.makeGrid();
    this.currentCell = this.setCurrentCell();
    this.listenForMoves = this.listenForMoves();
    this.lastCellId = this.cols * this.rows; 
  }
}

Grid.prototype.makeGrid = function () {
  
  for (let i = 0; i < this.rows; i++) {
    const $row = $('<div />');
    $row.attr('class', 'row');
    $row.appendTo(this.$grid);
    for (let j = 0; j < this.cols; j++) {
      const $col = $(`<div />`);
      $col.attr('class', 'cell').attr('id', this.count);
      $col.appendTo($row);
      this.count++;
    }
  }
};

Grid.prototype.randomInt = function(max) {
  return Math.floor(Math.random() * max);
};

Grid.prototype.listenForMoves = function() {
  $(document).keypress(() => {
    this.updateCurrentCell(event);
    console.log(this.currentCellId);
  });
};

Grid.prototype.moveUpDown = function(event) {
  let keyCode = event.code;
  if (keyCode === 'KeyS') {
    this.currentCell.removeClass('active');
    this.currentCellId += 1;
    if (this.currentCellId > this.lastCellId) {
      this.currentCellId = 1;
      this.currentCell = $(`#${this.currentCellId}`).addClass('active');
    } else {
      this.currentCell = $(`#${this.currentCellId}`).addClass('active');
    }
  }
  if (keyCode === 'KeyW') {
    this.currentCell.removeClass('active');
    this.currentCellId -= 1;
    if (this.currentCellId < 1) {
      this.currentCellId = this.lastCellId;
      this.currentCell = $(`#${this.currentCellId}`).addClass('active');
    } else {
      this.currentCell = $(`#${this.currentCellId}`).addClass('active');
    }
  }
};

Grid.prototype.moveLeftRight = function(event) {
  const delta = this.cols * (this.rows - 1);
  let previousId = this.currentCellId;
  let keyCode = event.code;

  if (keyCode === 'KeyD') {
    this.currentCell.removeClass('active');
    this.currentCellId += this.cols;
    if (this.currentCellId > this.lastCellId) {
      this.currentCellId = previousId - delta + 1;
    }
    this.currentCell = $(`#${this.currentCellId}`).addClass('active');
  }

  if (keyCode === 'KeyA') {
    this.currentCell.removeClass('active');
    this.currentCellId -= this.cols;
    if (previousId === 0) {
      this.currentCellId = this.lastCellId;
    }
    if (this.currentCellId <= 0) {
      this.currentCellId = previousId + delta - 1;
    }
    this.currentCell = $(`#${this.currentCellId}`).addClass('active');
  }
}

Grid.prototype.setCurrentCell = function() {
  this.currentCellId = this.randomInt(25);
  return $(`#${this.currentCellId}`).addClass('active');
};

Grid.prototype.updateCurrentCell = function(event){
  this.moveUpDown(event);
  this.moveLeftRight(event);
};

const danceFloor = new Grid(6, 5);