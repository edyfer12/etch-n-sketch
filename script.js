/* 
    When the user clicks on the thumb of the range slider, display the value of the grid positioned at the bottom of the thumb.
    For example, 50 X 50 is shown.
*/
//Capture the reference for the range slider
const rangeSlider = document.querySelector('input[type="range"]');
//Capture the reference of the paragraph element that shows the grid numbers as user drags the range slider thumb
const gridInput = document.querySelector('#gridValue');
//Capture the reference of the eraser button
const eraser = document.querySelector('#eraser');

//Set the eraser button activated to false
let eraserActivated = false;
//If the user clicks on the eraser button,
eraser.addEventListener('click', () => {
    //Set the eraser button activated to true
    eraserActivated = true;
});


/***************** ALGORITHM FOR SKETCHING THE PIXELATED IMAGE OR COLOURING ON THE SKETCHPAD *************************/
/********This is where the range slider has been used************************** */
//1. As a default, have the row as 1 and column as 1 as the default grid value on the range slider is 1 X 1
//Refer to the value of the range slider
let gridValue = rangeSlider.value;
//2. Ensure the number of grids on each row and column displayed evenly on the sketchpad based on the value of range slider
//Set the initial counter to 0 where it indicates the start of the row
let rowCounter = 0; 
//Refer to the sketchpad
const sketchpad = document.querySelector('#sketchpad');
//Loop from row 0 to a value of rows in the range slider value
for(;rowCounter < gridValue;){
    //Create the row element 
    let row = document.createElement('div');
    //Set the flex property of row element as 1 that is evenly scaled within the sketchpad
    row.style.flex = '1';
    //Set the class for the row element as row
    row.classList = 'row';
    //Set the initial counter to 0 where it indicates the start of the column for each row
    let colCounter = 0;
    //Loop from column 0 to the value of the range slider
    for(;colCounter < gridValue;){
//3. Display the borders in black colour of 0.5 pixels for the grids
        //Create grid element
        let grid = document.createElement('div');
        //Display grid element
        row.appendChild(grid);
        //Set the flex property of grid element to 1 that is even scaled within the row element
        grid.style.flex = '1';
        //Set the class for the column element
        grid.classList = 'grid';
        //Increment counter by 1 to create next grid element
        colCounter++;
    }
    //Display the row element 
    sketchpad.appendChild(row);
    //Increment counter by 1 to create next row element
    rowCounter++;
    
}
//Exit loop after all the rows and columns are created so user can use the mouse and clicks and hover on the grids to change 
//background colour to black from white
//Capture the reference for the grid
gridReference = document.querySelectorAll('.grid');
//Create an array that can store all the grids
let grids = Array.from(gridReference);
//Set the mouse down toggle to false
let mousedown = false;
//If the mouse buttons are released on any elements on the page,
window.addEventListener('mouseup', () => mousedown = false);
//Loop through the each individual grid within the array that store in all the grids
grids.forEach(grid => {
    //4. If the user clicks and holds on the grid that is white and hovers, change the background color to black 
    //If the user hovers over the grids and the mouse down toggle is true and eraser button is not clicked, 
    //set background colour to black
    grid.addEventListener('mouseover', () => {
        if(mousedown){
            grid.style.background = 'black';
        }
    })
    //If the user clicks on the grid, set background colour to black and set the mouse down toggle to true
    grid.addEventListener('mousedown', () => {
        grid.style.background = 'black'; 
        //if the grid background colour is black and eraser button is activated,
        if(grid.style.background === 'black' && eraserActivated){
            //set the background colour to white
            grid.style.background = 'white';
        }
        mousedown = true;
    });
});

//Add an array so each array item can be iterated to each row
let rows = Array.from(document.querySelectorAll('.row'));

/********************This is where the range slider is used***************************************************** */
//5. If the user changes the value on the range slider,
rangeSlider.addEventListener('input', () => {
    eraserActivated = false;
    //If the user clicks on the eraser button,
    eraser.addEventListener('click', () => {
        //Set the eraser button activated to true
        eraserActivated = true;
    });
    window.addEventListener('dragstart',(event) => {
       event.preventDefault();
    });

    //display the text content on the created element as current value of row multiplied by current value of column
    gridInput.textContent = rangeSlider.value + 'X' + rangeSlider.value;
    //Remove all the rows that will automatically remove the grid elements
    let rowCounter = 0;
    rows.forEach((rowItem) => {sketchpad.removeChild(rowItem)});
    //Create and display row elements
    for(let i = 0; i < rangeSlider.value; i++){
        let rowItem = document.createElement('div');
        rowItem.classList = 'row';
        rowItem.style.flex = '1';
        sketchpad.appendChild(rowItem);
        //Create and display grid elements
        for(let j = 0; j < rangeSlider.value; j++){
            let gridItem = document.createElement('div');
            gridItem.classList = 'grid';
            gridItem.style.flex = '1';
            rowItem.appendChild(gridItem);
        }
    }
    //Add arrays so next time the user plays with the range slider all the div elements are stored
    rows = Array.from(document.querySelectorAll('.row'));
    grids = Array.from(document.querySelectorAll('.grid'));
    //Set the mouse down toggle to false
    let mousedown = false;
    //If the mouse buttons are released on any elements on the page,
    window.addEventListener('mouseup', () => mousedown = false);
    //Loop through the each individual grid within the array that store in all the grids
    grids.forEach(grid => {
        //4. If the user clicks and holds on the grid that is white and hovers, change the background color to black 
        //If the user hovers over the grids, 
        //Prevent user from dragging on the grid
        
        grid.addEventListener('mouseover', () => {
            //set background colour to black if mouse down toggle is activated
            /*if(mousedown){
                grid.style.background = 'black';
            }*/
            //Set background colour to white if mouse down and eraser button is activated
            if(mousedown && eraserActivated){
                grid.style.background = 'white';
            }
            //Set background colour to black if mouse down toggle is activated and eraser toggle is off
            else if(mousedown && !eraserActivated){
                grid.style.background = 'black';
            }

        });
        //If the user clicks on the grid, set background colour to black and set the mouse down toggle to true
        grid.addEventListener('mousedown', () => {
            //If the eraser button is activated, set the background colour to white
            if(eraserActivated){
                grid.style.background = 'white';   
            }
            
            //if not, set the background colour to black
            else{
                grid.style.background = 'black';
            }
            mousedown = true;
        });
        
    });
});