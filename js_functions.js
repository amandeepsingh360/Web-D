// Normal function
function greet1(){
    console.log("Hello World");
}

// function parameter
const greet2=function(){
    console.log("Hello World");
}

// arrow function
const greet3=() => {
    console.log("Hello World");
}

greet1();
greet2();
greet3();

const square=(num)=> num*num;
console.log(square(3));


// Callback Function
const calculate=(a,b,operaton)=>{
    return operaton(a,b);
}

const addition = calculate(5,6,function(a,b){
    return a+b;
})

const subtraction=(a,b)=>a-b;

const p=calculate(5,6,subtraction);

console.log(addition);
console.log(p);

const multiply = (a,b) => a*b;
const multiResult=calculate(5,6,multiply);
console.log(multiResult);

function Callback(cheese){
    // SetTime out function
    // setTimeout(function,milliseconds);
    // It runs in different flow(Asynchronous function)
    setTimeout(() => {
       console.log("Give me cheese 🧀");
       cheese('🧀') 
    }, 3000);
}

Callback((cheese)=>{
    console.log("We got the cheese",cheese);
})

var setTimeoutID = setTimeout(() => {
    console.log("Text will print after 5sec");
}, 5000);

clearTimeout(setTimeoutID);//dont run the settimeout

// Prints the output after 1sec bar bar
IntervalID=setInterval(() => {
    greet1();
}, 1000);
clearInterval(IntervalID);//clears the interval
// Alert function
// alert("This is a message");
// It doesnot return anything 

// 1st argument -> message 
// 2nd argument -> default name
var name=prompt("What is ur name","Guest");
console.log(name);

var confirmName=confirm("Is the entered name Correct ?");
console.log(confirmName);