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
//2. Ensure the number of grids on each row and column displayed evenly on the sketchpad based on the value of range slider
    //Set the initial counter to 0 where it indicates the start of the row 
    //Loop from row 0 to a value of rows in the range slider value
        //Create the row element 
        //Display the row element 
        //Set the flex property of row element as 1 that is evenly scaled within the sketchpad
        //Set the initial counter to 0 where it indicates the start of the column for each row
        //Loop from column 0 to the value of the range slider
//3. Display the borders in black colour of 0.5 pixels for the grids
            //Create grid element
            //Display grid element
            //Set the flex property of grid element to 1 that is even scaled within the row element
            //Increment counter by 1 to create next grid element
    //Increment counter by 1 to create next row element
//4. If the user clicks and holds on the grid that is not clicked and hovers, change the background color to black 
    //Exit loop
    //Use event listener on the grid and set event to mousedown
        //Set the background colour of grid element to black
//5. If the user changes the value on the range slider, reset the sketchpad replacing all black grids back to white grids
    //Use event listener on the range slider and set event to input
        //Set counter variable to number of rows
        //Loop from number of rows to 0
            //Delete the row element as grids are deleted automatically
            //Decrement the counter by 1 deleting next row element
//6. Display the rows and columns based on chosen number of grids on the sketchpad
        //Exit loop
        //Set the initial counter to 0 where it indicates the start of the row 
        //Loop from row 0 to a value of rows in the range slider value
            //Create the row element 
            //Display the row element 
            //Set the flex property of row element as 1 that is evenly scaled within the sketchpad
            //Set the initial counter to 0 where it indicates the start of the column for each row
            //Loop from column 0 to the value of the range slider
                //Create grid element
                //Display grid element
                //Set the flex property of grid element to 1 that is even scaled within the row element
                //Increment counter by 1 to create next grid element
            //Increment counter by 1 to create next row element