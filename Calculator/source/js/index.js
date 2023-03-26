const result = document.querySelector(".result span");
const numbers = document.querySelectorAll(".numbers");
const symbols = document.querySelectorAll(".symbols");
const equality = document.querySelector(".equality");
const minus = document.querySelector(".minus");
const percent = document.querySelector(".percent");
const clear=document.querySelector(".ac");



let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let symbol = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
 
    
    let atr = e.target.getAttribute("value");
    if (isFirstValue === false) {
      getFirstValue(atr);
    }
    if (isSecondValue === false) {
      getSecondValue(atr);
    }
  });

}

document.addEventListener("keydown", handleKeyboardInput);
function handleKeyboardInput(e) {
  const key = e.key;
  if (/[0-9]/.test(key)) {
    if (isFirstValue === false) {
      getFirstValue(key);
    }
    if (isSecondValue === false) {
      getSecondValue(key);
    }
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    getSymbol(key);
  } else if (key === "Enter") {
    equality.click();
  }
}




function getFirstValue(el) {
 
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
}

function getSecondValue(el) {
  
  if (firstValue != "" && symbol != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}




function getSymbol() {
  for (let i = 0; i < symbols.length; i++) {
    symbols[i].addEventListener("click", (e) => {
     
      symbol = e.target.getAttribute("value");
      isFirstValue = true;
    });
  }
}

getSymbol();



equality.addEventListener("click", () => {
  result.innerHTML = "";
 
  if (symbol === "+") {
    resultValue = firstValue + secondValue;
  } else if (symbol === "-") {
    resultValue = firstValue - secondValue;
  } else if (symbol === "*") {
    resultValue = firstValue * secondValue;
  } else if (symbol === "/") {
    resultValue = firstValue / secondValue;
  }
  result.innerHTML = resultValue;
  firstValue=resultValue;
  secondValue="";

  checkResultLength();
});


function checkResultLength(){
resultValue=JSON.stringify(resultValue);

if (resultValue.length>=8) {
  resultValue=JSON.parse(resultValue);
  result.innerHTML=resultValue.toFixed(5);
  
}

}


minus.addEventListener("click",()=>{
  result.innerHTML="";
  if (firstValue!="") {
    resultValue=-firstValue;
    firstValue=resultValue;
  }
  if (firstValue!=""&&secondValue!=""&&symbol!="") {
    resultValue=-resultValue;
  }

  result.innerHTML=resultValue;
})


percent.addEventListener("click",()=>{
  result.innerHTML="";
  if (firstValue!="") {
    resultValue=firstValue/100;
    firstValue=resultValue;
  }
  if (firstValue!=""&&secondValue!=""&&symbol!="") {
    resultValue=resultValue/100;
  }

  result.innerHTML=resultValue;
})


clear.addEventListener("click",()=>{
  result.innerHTML="";
  firstValue="";
  isFirstValue=false;
  secondValue="";
  isSecondValue=false;
  symbol="";
  resultValue=0;
})