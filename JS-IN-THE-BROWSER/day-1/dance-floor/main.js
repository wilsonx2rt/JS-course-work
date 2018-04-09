
  rows = 5;
  cols = 5;
  count = 0;

  class grid {
    constructor() {
      
    }
  }

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const $grid = $('<div />').appendTo('body');
  $grid.attr('class', 'grid');
  
  
  for (let i = 0; i < rows; i++) {
    const $row = $('<div />');
    $row.attr('class', 'row');
    $row.appendTo($grid);
    for (let j = 0; j < cols; j++) {
      const $column = $('<div />');
      $column.attr('class', 'cell').attr('id', count);
      $column.appendTo($row);
      count++;
    }
  }

  setInterval(() => {
    const randomCell = randomInt(25);
    const randomColor = `rgb(${randomInt(255)}, ${randomInt(255)}, ${randomInt(255)})`;
    $colorfullCell = $(`#${randomCell}`).css('background-color', `${randomColor}`);
  }, 1);