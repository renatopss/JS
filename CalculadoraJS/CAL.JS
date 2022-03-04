"use strict"

var input = document.getElementById('input'),
number = document.querySelectorAll(".numbers div"),
operadores = document.querySelectorAll(".operadores div"),
result = document.getElementById("result"),
clear = document.getElementById('clear'),
resultDisplayed = false;

//adicionar manipuladores de botoes numeros
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        
        // armazenando a string de entrada atual e seu último caractere em variáveis
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        
        // se o resultado não for exibido, continue adicionando
        if(resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "Χ" ||
            lastChar === "÷") 
         {
            //se o resultado for exibido no momento e o usuário pressionou um operador
            // precisamos continuar adicionando a string para a próxima operação
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            // se o resultado for exibido no momento e o usuário pressionou um número
            // precisamos limpar a string de entrada e adicionar a nova entrada para iniciar a nova operação
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }

    });
}
//Adicionar manipuladores de numeros

for (var i = 0; i<operadores.length; i++){
    operadores[i].addEventListener("click", function(e){
        // guardar a string de entrada e seu ultima caractere em um variavel-uso posterior
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        //se o ultimo caracter for um operador, substituir pelo atual pressionando outro
        if(lastChar === "+" || lastChar === "-" || lastChar === "Χ" || lastChar === "÷") {
            var newString =currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            //se a tecla pressionado for operador, nao faça nada!
            console.log("Digite um Numero");
        } else {
            //Caso nao, adicione o operador digitado
            input.innerHTML += e.target.innerHTML;
        }
    });
}

//equal click botão
result.addEventListener("click", function() {
    //string para processar equações
    var inputString = input.innerHTML;

    // forma array dos numeros
    var numbers = inputString.split(/\+|\-|\Χ|\÷/g);

    // Forma array dos operadores
    //Antes substitui todos os numeros e sinais por strings vazia e divide
    var operadores = inputString.replace(/[0-9]|\./g, "").split("");
    
    console.log(inputString);
    console.log(operadores);
    console.log(numbers);
    console.log("-------------------------");

    //pelas arrays vamos fazer as operações uma a uma
    //primeiro divição e multiplicação, depois subtração e adição
    //o elemento final da array sera a saida

    var divide = operadores.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operadores.splice(divide, 1);
        divide = operadores.indexOf("÷");
    }

    var multiply = operadores.indexOf("Χ");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operadores.splice(multiply, 1);
        multiply = operadores.indexOf("Χ");
    }

    var subtract = operadores.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operadores.splice(subtract, 1);
        subtract = operadores.indexOf("-");
    }

    var add = operadores.indexOf("+");
  while (add != -1) {
    // use parseFloat ou voce so ira concatenar strings
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operadores.splice(add, 1);
    add = operadores.indexOf("+");
  }

    input.innerHTML = numbers[0]; //mostra saida

    resultDisplayed = true; // mostra a bandeira se o resultado for exibido

    
});

// Limpar com o botão C
    clear.addEventListener("click", function() {
        input.innerHTML = "";
    })