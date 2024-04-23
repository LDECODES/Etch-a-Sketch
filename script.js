let gridSizeButton = document.querySelector('#gridSize')
let eraserButton = document.querySelector('#eraser')
let defaultButton = document.querySelector('#default')
let rainbowButton = document.querySelector('#rainbow')
let monochromeButton = document.querySelector('#monochrome')
let resetButton = document.querySelector('#resetGrid')


document.querySelector('button').addEventListener("click", function(event) {
  // Get the target element that was clicked
  const clickedElement = event.target;

  // Use a switch statement to handle different cases
  switch (clickedElement.id) {
      case "gridSize":
          console.log('hi')
        break;
      case "eraser":
        break
      
      case "default" :
        break

      case "rainbow":
        break

      case "monochrome":
        break

      case "resetGrid":
        makeGrid();
        break
          
      default:
        console.log('something went wrong')
  }
          
});

    
function makeGrid( ) {

}

function makeRow() {

}

function makeCells() {

}