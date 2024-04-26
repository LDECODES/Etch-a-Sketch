document.addEventListener("DOMContentLoaded", function() {
let gridSizeButton = document.querySelector('#gridSize')
let eraserButton = document.querySelector('#eraser')
let defaultButton = document.querySelector('#default')
let rainbowButton = document.querySelector('#rainbow')
let monochromeButton = document.querySelector('#monochrome')
let resetButton = document.querySelector('#resetGrid')
let content = document.querySelectorAll('button');
let grid = document.querySelector('grid')

let size = 0

makeGrid();

document.querySelector('button').addEventListener("click", function(event) {
  // Get the target element that was clicked
  const clickedElement = event.target;

  // Use a switch statement to handle different cases
  switch (clickedElement.id) {
      case "gridSize":
        changeGridSize();
        break;
      case "eraser":
        mode = "eraser";
        break
      
      case "default" :
        mode = "default"
        break

      case "rainbow":

        mode = "rainbow"
        break

      case "monochrome":
        mode = "monochrome"
        break

      case "resetGrid":
        makeGrid();
        break
          
      default:
        console.log('something went wrong')
  }
          
});

    
function makeGrid(size=16){ 
  for(let i = 0; i < size; i++){ //make and insert rows
    const row = makeRow(size)
    for (let j = 0; j < size; j++) {
      let cell = makeCells(size)
      row.appendChild(cell)
    }
    grid.appendChild(row); //insert row in grid container
  }
  return;
}

function makeRow() {
  const div = document.createElement('div')
  div.setAttribute("id", "row");
  div.style.display = "flex";
  div.style.flexDirection = "row"
  div.style.height = (100/size) + "%"
  return div;

}

function makeCells() {
  const cell = document.createElement('div')
  cell.setAttribute("id", "cell")
  cell.style.width = (100/size) + "%"
  cell.style.height = (100 + "%");
  cell.style.border = "solid 1px black";
  cell.style.backgroundColor = "white";
  return cell;
}

function changeGridSize(){
size = prompt("Choose a number from 1 to 100");
if ((0>size)&&(size >= 100)) {
  makeGrid(size);
}else if((size <= 0)||(size > 100)){
  alert("Number must be from 1 to 100");
}else {
  console.log("Something went wrong");
}

}





})