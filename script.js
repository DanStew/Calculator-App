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

        //Stop showing the answer to the equation
        let answerArea = document.getElementById("answer_area")
        answerArea.innerHTML = ""

        //Code to make changes to the equation, based upon what the user inputted
        if (value.length == 1){
            equation += value
        }
        else {
            processAlternateValues(value)
        }
        updateEquationOutput()
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
    updateEquationOutput()
})

//Function used to process alternate values and add them to the equation
function processAlternateValues(value){
    if (value=="on"){
        equation = ""
    }
    else if (value=="open_bracket"){
        equation += "("
    }
    else if (value=="closed_bracket"){
        equation += ")"
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

    //Function called to ensure there are no errors in the calculation
    let noErrors = identifyErrors()

    //This function will continue only if there are no errors in the code
    if (noErrors){
        let answerArea = document.getElementById("answer_area")
        answerArea.innerHTML = math.eval(equation)
    }
}

//Function used to identify errors in the equation that the user has inputted
function identifyErrors(){

    //Ensuring the last item isn't an operator
    let correctOperator = lastOperator()

    //Ensuring you aren't trying to divide by 0
    let noDivideError = divideBy0Error()

    if (noDivideError == true && correctOperator == true){
        return true
    }
    else{
        return false
    }
}

function lastOperator(){
    let lastCharacter = equation.substring(equation.length-1,equation.length)
    if (lastCharacter == "/" || lastCharacter == "*" || lastCharacter == "+" || lastCharacter == "-"){
        alert("Last character can't be an operator")
        return false
    }
    return true
}

function divideBy0Error(){
    for (let i=0 ; i<equation.length ; i++){
        if (equation.substring(i,i+1) == "/" && equation.substring(i+1,i+2) == "0"){
            alert("Divide by 0 error")
            return false
        }
    }
    return true
}


//Functions to output the inputs by the user to the screen
function updateEquationOutput(){
    let equationArea = document.getElementById("equation_area")
    equationArea.innerHTML = equation
}
