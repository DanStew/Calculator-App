let calculatorButtons = document.querySelectorAll(".calculator_button")
console.log(calculatorButtons)

for (let i=0; i<calculatorButtons.length; i++){
    calculatorButtons[i].addEventListener("click",processClick)
}

function processClick(e){
    console.log(e)
}