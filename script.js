document.addEventListener("DOMContentLoaded", function() {
let gridSizeButton = document.querySelector('#gridSize')
let eraserButton = document.querySelector('#eraser')
let defaultButton = document.querySelector('#default')
let rainbowButton = document.querySelector('#rainbow')
let monochromeButton = document.querySelector('#monochrome')
let resetButton = document.querySelector('#resetGrid')
let content = document.querySelectorAll('button');
let grid = document.querySelector('.grid')
let mode = "default";

let size = 0

makeGrid();

document.querySelectorAll('button').forEach(button => {
  button.addEventListener("click", function(event) {
  // Get the target element that was clicked
  const clickedElement = event.target;

  // Use a switch statement to handle different cases
  switch (clickedElement.id) {
      case "gridSize":
      console.log('hello')
        changeGridSize();
        break;
      case "eraser":
        mode = "eraser";
        console.log('hello')
        colourMode(clickedElement)
        break
      
      case "default" :
        mode = "default"
        colourMode(clickedElement)
        break

      case "rainbow":
        mode = "rainbow"
        colourMode(clickedElement)
        break

      case "monochrome":
        mode = "monochrome"
        colourMode(clickedElement)
        break

      case "resetGrid":
        makeGrid();
        break
          
      default:
        console.log('something went wrong')
  }
})

          
});



    
function makeGrid(size = 16){ 
  grid.innerHTML = ''
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

function makeRow(size) {
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
  cell.style.height = 100 + "%";
  cell.style.border = "solid 1px black";
  cell.style.backgroundColor = "white";
  cell.style.flexGrow = "1"
  cell.style.flexShrink = "4"
  return cell;
}

function changeGridSize(){
size = prompt("Choose a number from 1 to 100");
if ((size <= 100)&&(size > 0)) {
  console.log(size)
  makeGrid(size);
}else{
  alert("Number must be from 1 to 100");
}

}

function colourMode(cell) {
  
 switch(mode){
 case "eraser" :
  cell.style.backgroundColor = "white"
 break
 case "monochrome":
  cell.style.backgroundColor = "lightgrey" 
 break
 case "default":
  cell.style.backgroundColor = "black"

 break
 case "rainbow" :
 cell.style.backgroundColor = rainbow();

 break
 }
 
}

function rainbow() {

}



grid.addEventListener("mouseover", function(e) {
  console.log(e.target)
  colourMode(e.target)
})

})

