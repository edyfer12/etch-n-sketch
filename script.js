/* 
    When the user clicks on the thumb of the range slider, display the value of the grid positioned at the bottom of the thumb.
    For example, 50 X 50 is shown.
*/
//Capture the reference for the range slider
const rangeSlider = document.querySelector('input[type="range"]');
//Capture the reference of the paragraph element that shows the grid numbers as user drags the range slider thumb
const gridInput = document.querySelector('#gridValue');
//When user clicks the button on the range slider, 
rangeSlider.addEventListener('input', () => {
    //display the text content on the created element as current value of row multiplied by current value of column
    gridInput.textContent = rangeSlider.value + 'X' + rangeSlider.value;
});

/* 
    When the user clicks and hold on the individual grids in a sketchpad, colour changes go from white 
    (default) to black to indicate that the image is drawn in pixelated style or coloured.
*/
//*********************************(1,1) DEFAULT ROW,COLUMN***********************************************************/
//Capture the reference based on the sketchpad container containing rows and columns of grids
/*const sketchpad = document.querySelector('#sketchpad');
//Create an element based on one row and one column of the grid inside the sketchpad
const grid = document.createElement('div');
//Append the element displaying grid of square as the child element to the parent element, the sketchpad
sketchpad.appendChild(grid);
//When user clicks on the grid inside the sketchpad, change the background colour from white to black
grid.addEventListener('click',() => grid.style.background = 'black');*/

/***************** ALGORITHM FOR SKETCHING THE PIXELATED IMAGE OR COLOURING ON THE SKETCHPAD *************************/

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
let gridReference = document.querySelectorAll('.grid');
//Create an array that can store all the grids
const grids = Array.from(gridReference);
//Set the mouse down toggle to false
let mousedown = false;
//If the mouse buttons are released on any elements on the page,
window.addEventListener('mouseup', () => mousedown = false);
//Loop through the each individual grid within the array that store in all the grids
grids.forEach(grid => {
    //4. If the user clicks and holds on the grid that is white and hovers, change the background color to black 
    //If the user hovers over the grids and the mouse down toggle is true, set background colour to black
    grid.addEventListener('mouseover', () => {if(mousedown)grid.style.background = 'black'})
    //If the user clicks on the grid, set background colour to black and set the mouse down toggle to true
    grid.addEventListener('mousedown', () => {grid.style.background = 'black'; mousedown = true});
});
//Add an array so each array item can be iterated to each row
const rows = Array.from(document.querySelectorAll('.row'));
//5. If the user changes the value on the range slider,
rangeSlider.addEventListener('input', () => {
    //Remove all the rows and columns
    //Loop through each item in the array that store rows
    rows.forEach(row => {
        //Loop through each item in the array that store grids
            //Remove the grid per row
        //Remove the row
    //
    });
    //Create new rows and columns based on the range slider value
});