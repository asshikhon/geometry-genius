function calculateRectangleArea(){

const lengthInput = document.getElementById('rectangle-lenght');
const lengthText = lengthInput.value;
const length =parseFloat(lengthText);
    console.log(length);

    // width
const widthInput = document.getElementById('rectangle-width');
const widthText = widthInput.value;
const width = parseFloat(widthText)
console.log(width);

// calculate
const area = length * width;
console.log('area of the rectangle:', area);
// display area 
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area;
}