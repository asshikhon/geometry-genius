function calculatePentagonArea(){

    const perimeter = getInputValueById('pentagon-perimeter')
    // console.log('base value', base);
    
    const apothem = getInputValueById('pentagon-apothem')
    // console.log('height value', height);
    
    const area =0.5 * perimeter * apothem;
    console.log('area of the pentagon:', area);
    
    // display area 
    
    setInnerTextById('pentagon-area', area)
    

    }
    
    
    
    function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
    }
    
    
    
    function setInnerTextById(elementId, area){
        const element = document.getElementById(elementId);
        element.innerText = area;
    }