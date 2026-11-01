// Función para que la computadora elija al azar
function getComputerChoice() {
    let randomNumber = Math.random();
    
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Función para que el humano elija con un prompt
function getHumanChoice() {
    // .toLowerCase() hace que "ROCK", "Rock" o "rock" sean todos "rock"
    let choice = prompt("Elige: rock, paper o scissors").toLowerCase();
    return choice;
}

// Función principal del juego
function playGame() {
    // 1. Variables de puntaje (declaradas DENTRO de playGame)
    let humanScore = 0;
    let computerScore = 0;

    // 2. Función para jugar una ronda (declarada DENTRO de playGame)
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("¡Empate! Ambos eligieron " + humanChoice);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`¡Ganaste! ${humanChoice} vence a ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`¡Perdiste! ${computerChoice} vence a ${humanChoice}`);
        }
    }

    // 3. Jugar 5 rondas (usando un bucle for)
    for (let i = 0; i < 5; i++) {
        console.log(`--- Ronda ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // 4. Declarar al ganador final
    console.log("=== RESULTADO FINAL ===");
    if (humanScore > computerScore) {
        console.log(`¡Has ganado el juego! Puntaje: Tú ${humanScore} - Computadora ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Has perdido el juego. Puntaje: Tú ${humanScore} - Computadora ${computerScore}`);
    } else {
        console.log(`¡Es un empate! Puntaje: Tú ${humanScore} - Computadora ${computerScore}`);
    }
}

// 5. ¡Iniciar el juego!
playGame();