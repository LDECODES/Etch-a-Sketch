document.addEventListener("DOMContentLoaded", function() {
let gridSizeButton = document.querySelector('#gridSize')
let eraserButton = document.querySelector('#eraser')
let defaultButton = document.querySelector('#default')
let rainbowButton = document.querySelector('#rainbow')
let monochromeButton = document.querySelector('#monochrome')
let resetButton = document.querySelector('#resetGrid')
let content = document.querySelectorAll('button');
let grid = document.querySelector('grid')
let mode = "";
let size = 0

makeGrid();

document.querySelector('button').addEventListener("click", function(event) {
  // Get the target element that was clicked
  const clickedElement = event.target;

  // Use a switch statement to handle different cases
  switch (clickedElement.id) {
      case "gridSize":
        changeGridSize();
        console.log('hello')
        th
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
  

}

function makeRow() {

}

function makeCells() {

}

function changeGridSize(){
size = prompt("Choose a number from 1 to 100")
if ((0>size)&&(size >= 100)) {
  makeGrid(size)
}else {
  alert("Number must be from 1 to 100")
}

}





})