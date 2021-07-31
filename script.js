let container = document.querySelector('.container');
container.innerHTML="";
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
let numberOfColumns = 16;
let numberOfRows = 16;


for (i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.style.backgroundColor = 'blue';
  div.setAttribute('id', ('div' + i));
  div.setAttribute('class', 'block');
  container.appendChild(div);
}

function makeSketchable(){
  let sketchBlocks = document.querySelectorAll(".block");
  for (let i = 0; i < sketchBlocks.length; i++) {
    sketchBlocks[i].addEventListener("mouseover", function() {
      sketchBlocks[i].style.backgroundColor = "purple";
    });
  }

  for (let i = 0; i < sketchBlocks.length; i++) {
    sketchBlocks[i].addEventListener("mouseenter", function() {
      sketchBlocks[i].style.backgroundColor = "purple";
      setTimeout(function() {
        sketchBlocks[i].style.backgroundColor = "blue";
      }, 50000)
   });
  }
}

function makeGrid(x, y) { 
  let columns = 'repeat(' + y + ', 1fr)';
  let rows = 'repeat(' + x + ', 1fr)';
  container.style.gridTemplateColumns = columns;
  container.style.gridTemplateRows = rows;
  
  let oldBlocks = document.querySelectorAll(".block");
  for (i = 0; i < oldBlocks.length; i++) {
    oldBlocks[i].remove();
  }

  for (i = 0; i < (x * y); i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = 'blue';
    div.setAttribute('id', ('div' + i));
    div.setAttribute('class', 'block');
    container.appendChild(div);
  }
  
  makeSketchable();
  let numberOfColumns = y;
  let numberOfRows = x;
  return columns, rows, numberOfColumns, numberOfRows;
}

makeSketchable();