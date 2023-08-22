let celsius=document.querySelector(".celsius");
let kelvin=document.querySelector('.kelvin');
let fahrenheit=document.querySelector('.fahrenheit')

function convertTemp(event){
    let currentValue=+event.target.value;
    switch (event.target.name) {
        case "celsius":
            kelvin.value=(currentValue +273.32);
            fahrenheit.value=(currentValue*1.8 +32);
            break;
    
        default:
            break;
    }
}