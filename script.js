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
    gridInput.textContent = rangeSlider.value;
});
