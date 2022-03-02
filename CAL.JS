"use strict"

var input = document.getElementById('input'),
number = document.querySelectorAll(".numbers div"),
operadores = document.querySelectorAll(".operadores div"),
result = document.getElementById("result"),
resultDisplayed = false;

//adicionar click nos botoes numeros
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if(resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (
            (resultDisplayed === true && lastChar === "+") ||
            lastChar ==="-" ||
            lastChar ==="x" ||
            lastChar ==="÷" 
        ) {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        }
    })
}