//variables
const buttonClear = document.querySelector('.clearButton')
const buttonNew = document.querySelector('.newGame')
const gridContainer = document.querySelector('.gridContainer')
const buttonColor = document.querySelectorAll('.colorChoice')
let color = 'black'

createGrid(20);
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
    wholeGrid.forEach(oneGrid => oneGrid.addEventListener('mouseover', colorGrid))
}

//function for drawing colors called in create grid
// var color in switch expression - at row 5 - created var color
//color will serve as case switcher with next function changeVarColor
//random case - calling value from getRandomColor fucntion
function colorGrid(){
    switch(color){
        case 'random':
            this.style.backgroundColor = getRandomColor();
            break
        case 'gradual':
            this.style.backgroundColor = 'grey' //not really gradual, it's optional in odinProject
            break
        case 'black':
            this.style.backgroundColor = 'black'
            break
        default:
            this.style.backgroundColor = 'black'
            break;
    }
}
//this function changes variable color
// connected to the buttons with addeventListener + dataset in html
//parametr in function is event (clicking button)
//expression in switch is button's dataset-color which is same as case (might be confusing)
//it changes var color, which is used in function colorGrid, which is called in createGrid
function changeColorVar(e){
    switch(e.target.dataset.color){
        case 'random':
            color = 'random'
            break
        case 'gradual':
            color = 'gradual'
            break
        default:
            color = 'black'
            break
    }
}
//copied from stack overflow!
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
//simple erase button
function erase(){
    let wholeGrid = gridContainer.querySelectorAll('div')
    wholeGrid.forEach(oneGrid => oneGrid.style.backgroundColor = '#fff')
};
//funciton for new Game
//parseint for getting number out of string
//call createGrid with prompt as argument
function makeNew(){
    erase()
    let gridNumber = parseInt(prompt('Gimme a grid size:'))
    while(isNaN(gridNumber) || gridNumber < 0 || gridNumber > 100){
        gridNumber = parseInt(prompt('Pick a number between 1 and 100'))
    }
    createGrid(gridNumber)
}

//eventlisteners
buttonClear.addEventListener('click', erase)
buttonNew.addEventListener('click', makeNew)
buttonColor.forEach(button => button.addEventListener('click', changeColorVar))

