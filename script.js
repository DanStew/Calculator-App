//Global Variables
let equation = "";

//Collecting all of the calculator buttons
let calculatorButtons = document.querySelectorAll(".calculator_button")

//Creating the click event for all of the buttons
for (let i=0; i<calculatorButtons.length; i++){
    calculatorButtons[i].addEventListener("click",function(){

        //This is the function that deals with the input from the user

        //Collecting and Storing the value of the button that they selected
        //If it's a number, the number value is stored
        //Else a description of the button they clicked is stored
        let value = calculatorButtons[i].innerHTML.length == 1 ? calculatorButtons[i].innerHTML : calculatorButtons[i].value

        //Code to make changes to the equation, based upon what the user inputted
        if (value.length == 1){
            equation += value
        }
        else {
            processAlternateValues(value)
        }
        console.log(equation)
    })
}

//Creating the code to allow the user to type in an input
document.addEventListener("keyup",function(e){
    //Branch to deal with if the user has entered a number
    if (e.keyCode >= 48 && e.keyCode <= 57){
        value = String.fromCharCode(e.keyCode)
        equation += value
    }
    //Branch to deal with if the user has entered an operation
    else if (e.keyCode == 42 || e.keyCode == 43 || e.keyCode == 45 || e.keyCode == 46 || e.keyCode == 47){
        value= String.fromCharCode(e.keyCode)
        equation += value
    }
    console.log(equation)
})

//Function used to process alternate values and add them to the equation
function processAlternateValues(value){
    if (value=="on"){
        equation = ""
    }
    else if (value=="squared"){

    }
    else if (value=="powerOf"){

    }
    else if (value=="divide"){
        equation += "/"
    }
    else if (value=="multiply"){
        equation += "*"
    }
    else if (value=="subtract"){
        equation += "-"
    }
    else if (value=="addition"){
        equation += "+"
    }
    else if (value=="delete"){
        equation = equation.substring(0,equation.length-1)
    }
    else if (value == "decimalPoint"){
        equation += "."
    }
    else if (value=="equate"){
        equateEquation()
    }
}

//Function used to find the result of the calculation that the user has inputted
function equateEquation(){
    
}