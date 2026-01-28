//Función para obtener la respuesta de la maquina (Piedra, Papel o tijera)

let humanScore = 0
let computerScore = 0

function getComputerChoice(){

    let randomNumber = Math.floor(Math.random() * 3+ 1)

    if(randomNumber == 1){
        return "piedra"
    }else if(randomNumber == 2){
        return "papel"
    }else if(randomNumber == 3){
        return "tijera"
    }

}

//Obtener la entrada del usuario

function getHumanChoice(){

    let humanChoice = prompt("Ingrese su jugada: (Piedra, Papel, Tijera)").toLowerCase()

    return humanChoice
}

//Funcion para determinar el ganador de cada ronda
function playRound(humanChoice, computerChoice){

    if(humanChoice == "piedra"){

        if(computerChoice == "piedra"){
            alert(`La maquina eligió ${computerChoice}, Empate`)
            showScore()
        }else if(computerChoice == "papel"){
            alert(`La maquina eligió ${computerChoice}, Perdiste`)
            computerScore++
            showScore()
        }else{
            alert(`La maquina eligió ${computerChoice}, Ganaste`)
            humanScore++
            showScore()
        }
    }else if(humanChoice == "papel"){
        if(computerChoice == "piedra"){
            alert(`La maquina eligió ${computerChoice}, Ganaste`)
            humanScore++
            showScore()
        }else if(computerChoice == "papel"){
            alert(`La maquina eligió ${computerChoice}, Empate`)
            showScore()
        }else{
            alert(`La maquina eligió ${computerChoice}, Perdiste`)
            computerScore++
            showScore()
        }
    }else if(humanChoice == "tijera"){

        if(computerChoice == "piedra"){
            alert(`La maquina eligió ${computerChoice}, Perdiste`)
            computerChoice++
            showScore()
        }else if(computerChoice == "papel"){
            alert(`La maquina eligió ${computerChoice}, Ganaste`)
            humanScore++
            showScore()
        }else{
            alert(`La maquina eligió ${computerChoice}, Empate`)
            showScore()
        }
    }else{
        alert("Opción no valida")
    }
}

//Funcion para mostrar los puntajes
function showScore(){
    alert(`Resultado: Maquina: ${computerScore} Jugador: ${humanScore}`)
}

//Funcion para que se juegue solo 5 ronda
function playGame(){
    for(let i = 0; i < 5; i++){

        alert(`Ronda ${i+1}`)
        playRound(getHumanChoice(), getComputerChoice())
    }

    alert("Resultado Final")
    showScore()
    if(humanScore > computerScore){

        alert("El jugador ganó la partida")
    }else if(humanScore < computerScore){
        alert("La maquina ganó la partida")
    }else{
        alert("Empate")
    }

}

playGame()
