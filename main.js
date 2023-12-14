//variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', btnreturn)


// Funções callback


function toogleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    const inputValue = Number(inputNumber.value.trim())  // Remova espaços em branco do início e do fim

    // Verifica se o campo está vazio ou não é um número válido
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
        alert("Digite um número válido entre 1 e 10.")
        return; // Sai da função se a entrada não for válida
    }

    if (inputValue == randomNumber) {
        toogleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    } else {
        inputNumbers(inputValue)
        inputNumber.value = ""
        xAttempts++
    }
}


function handleResetClick() {
    toogleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
    inputNumber.value = ""
}

function inputNumbers(value) {
    

    if (value < 1 || value > 10 || isNaN(value)) {
        alert("Digite um número válido entre 1 e 10.")
    }
}


function btnreturn(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}


