/* 
    When the user clicks on the thumb of the range slider, display the value of the grid positioned at the bottom of the thumb.
    For example, 50 X 50 is shown.
*/
//Capture the reference for the parent element so child element can get appended
const rangeBox = document.querySelector('.group-range');
//Create an element node using JavaScript to be able to display values
const currentGrid = document.createElement('p');
//When user clicks the button on the range slider, 
input[type="range"].addEventListener('click', () => {
    //append the element to the parent element that holds the range slider, minimum and maximum values
    rangeBox.appendChild(currentGrid);
    //display the text content on the created element as current value of row multiplied by current value of column
    currentGrid.textContent = input[type="range"].value;
});
