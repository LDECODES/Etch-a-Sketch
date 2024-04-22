gridSizeButton = document.querySelector('#gridSize')
eraserButton = document.querySelector('#eraser')
defaultButton = document.querySelector('#default')
rainbowButton = document.querySelector('#rainbow')
monochromeButton = document.querySelector('#monochrome')
resetButton = document.querySelector('#resetGrid')


let buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
         let playerSelection = button.id
         let computerSelection = getComputerChoice()
         console.log(computerSelection);
         playRound(playerSelection, computerSelection);
          
        })
      })

    
function makeGrid( ) {

}

function makeRow() {

}

function makeCells() {

}