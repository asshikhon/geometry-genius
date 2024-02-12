function calculateTriangleArea(){
 const triangleBaseInput = document.getElementById('triangle-base');
 const triangleBaseText = triangleBaseInput.value;
 const base = parseFloat(triangleBaseText)
 console.log(base);

// height
const triangleHeightInput = document.getElementById('triangle-height');
const value = triangleHeightInput.value;
const height = parseFloat(value)
console.log(height);


// area 

const area = .5 * base * height
console.log('area of the triangle is:', area);

// display triangle area
const triangleAreaSpan = document.getElementById('triangle-area')
triangleAreaSpan.innerText = area;

}