
const display = document.querySelector(".display");
let buttons = document.querySelectorAll(".number");
let plus = document.querySelector(".operation-plus");
let minus = document.querySelector(".operation-minus");
let multiplication = document.querySelector(".operation-multiplication");
let division = document.querySelector(".operation-division");
let operations = document.querySelectorAll(".operations");
let evaluate = document.querySelector(".evaluate");
let clear = document.querySelector(".clear");
let back = document.querySelector(".back")
let previousValue = '';
let currentValue = '';
let operator = "";
let symbols = ["+", "-", "*", "/"]

let add = (a,b) => parseFloat(a)+parseFloat(b);
let subtract = (a,b) => parseFloat(a) - parseFloat(b);
let multiply = (a,b) => parseFloat(a) * parseFloat(b);
let divide = (a,b) => parseFloat(a) / parseFloat(b);
let compute = (a,b,operator)=>{
    console.log("Inputs:", a, b, operator);
    switch(operator) {
        case "+":
            return(add(a,b));
        case "-":
            return(subtract(a,b));
        case "*":
            return(multiply(a,b));
        case "/":
            return(divide(a,b));
    }
    operator = "";
}

plus.addEventListener("click", () => {
    if(display.value == "") {return}
    if(previousValue!= ""&& currentValue != ""){
        previousValue = compute(previousValue, currentValue, operator)
        display.value = previousValue;
        console.log(`computed prevval:${previousValue}`)
        currentValue = "";
    } else {
       if(currentValue == ""){
        previousValue = previousValue;
       } else {
        previousValue = currentValue;
         currentValue = "";
       }
       
    }
    operator = "+";
    display.value += "+";

})
minus.addEventListener("click", () => {
    if(display.value == "") {return}
    if(previousValue!= ""&& currentValue != ""){
    previousValue = compute(previousValue, currentValue, operator)
    display.value = previousValue;
    currentValue = "";
    console.log(`computed prevval:${previousValue}`)
    } else {
           if(currentValue == ""){
            previousValue = previousValue;
           } else {
            previousValue = currentValue;
            currentValue = "";
       }
     }
    operator = "-";
    display.value += "-";
})
 
multiplication.addEventListener("click", () => {
    if(display.value == "") {return}
    if(previousValue!= ""&& currentValue != ""){
    previousValue = compute(previousValue, currentValue, operator)
    display.value = previousValue;
    currentValue = "";
    console.log(`computed prevval:${previousValue}`)
    } else {
           if(currentValue == ""){
            previousValue = previousValue;
           } else {
            previousValue = currentValue;
            currentValue = "";
       }
     }
    operator = "*";
    display.value += "*";
})

division.addEventListener("click", () => {
    if(display.value == "") {return}
    if(previousValue!= ""&& currentValue != ""){
    previousValue = compute(previousValue, currentValue, operator)
    display.value = previousValue;
    currentValue = "";
    console.log(`computed prevval:${previousValue}`)
    } else {
           if(currentValue == ""){
            previousValue = previousValue;
           } else {
            previousValue = currentValue;
            currentValue = "";
       }
     }
    operator = "/";
    display.value += "/";
})

evaluate.addEventListener("click", () => {
    console.log(previousValue, currentValue, operator)
    if(previousValue == "" || operator == ""){
        return
    } else {
        previousValue = compute(previousValue, currentValue, operator);
        console.log(previousValue, currentValue, operator)
        display.value = previousValue;
        currentValue = "";}
    
})
buttons.forEach(button => {
   button.addEventListener("click", () => {
    console.log(previousValue, currentValue, operator != "")
    currentValue += button.textContent;
    console.log("Button is pressed");
    console.log(currentValue);
    display.value += button.textContent;
    
    } )

   })

clear.addEventListener("click", () => {
    display.value = "";
    previousValue = "";
    currentValue = "";
})

back.addEventListener("click", () => {
    let newVal = display.value;
    let symbol = newVal.charAt(newVal.length);
    console.log(symbol)
    if(symbols.includes(symbol)){
        operator = "";
    } else {
        currentValue = currentValue.slice(symbol,-1)
        console.log(currentValue)
        console.log(previousValue)
    }
    display.value = newVal.slice(symbol,-1);
})







