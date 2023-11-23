const result = document.querySelector(".result")
const humanScore = document.querySelector("#humanScore")
const machineScore = document.querySelector("#machineScore")

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {      // ENUM 
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Human: ' + human + ' Machine: ' + machine)

    if (human === machine) {
        result.innerHTML = "Empate!"
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        humanScoreNumber++
        result.innerHTML = "Voçê ganhou!"
        humanScore.innerHTML = humanScoreNumber
    } else {
        machineScoreNumber++
        result.innerHTML = "Voçê perdeu!"
        machineScore.innerHTML = machineScoreNumber
    }
}