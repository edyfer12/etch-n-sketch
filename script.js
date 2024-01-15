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
//Capture the reference based on the sketchpad container containing rows and columns of grids
const sketchpad = document.querySelector('#sketchpad');
//Create an element based on one row and one column of the grid inside the sketchpad
const grid = document.createElement('div');
//Append the element displaying grid of square as the child element to the parent element, the sketchpad
sketchpad.appendChild(grid);
//When user clicks on the grid inside the sketchpad, change the background colour from white to black
grid.addEventListener('click',() => grid.style.background = 'black');