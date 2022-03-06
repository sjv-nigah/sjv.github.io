let celsius = document.getElementById("c");
let fahrenheit = document.getElementById("f");
let kelvin = document.getElementById("k")

function ctof(){
    let output = (parseFloat(celsius.value)*9/5)+32;
    fahrenheit.value = parseFloat(output);
    console.log(output);
}
function ctok(){
    let output= (parseFloat(celsius.value)+273.15);
    kelvin.value = parseFloat(output);
    console.log(output);
}

function ftoc(){
    let output = (5/9)*(parseFloat(fahrenheit.value)-32);
    celsius.value = parseFloat(output);
    console.log(output);
}
function ftok(){
    let output = (5/9)*(parseFloat(fahrenheit.value)-32)+273.15;
    kelvin.value = parseFloat(output);
    console.log(output);
}

function ktoc(){
    let output = parseFloat(kelvin.value)-273.15;
    celsius.value = parseFloat(output);
    console.log(output);
}
function ktof(){
    let output = (5/9)*(parseFloat(fahrenheit.value)-32)-273.15;
    fahrenheit.value= parseFloat(output);
    console.log(output);
}