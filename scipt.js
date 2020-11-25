//variables
const buttonClear = document.querySelector('.clearButton')
const gridContainer = document.querySelector('.gridContainer')
const buttonColor = document.querySelectorAll('.colorChoice')

//function to create grid - input; square(input*input) - for loop iteration; 
//add css style to gridContainer
//forloop - create and insert divs
function createGrid(gridNumber){
    let gridSquare = gridNumber * gridNumber;
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`
    for(i = 1; i <= gridSquare; i++ ){
        let grids = document.createElement('div')
        gridContainer.insertAdjacentElement('afterbegin', grids) //can beforeend?
    }
    //get all divs, iterate through each
    let wholeGrid = gridContainer.querySelectorAll('div')
    wholeGrid.forEach(oneGrid => oneGrid.style.backgroundColor = 'red')
}
createGrid(4);
