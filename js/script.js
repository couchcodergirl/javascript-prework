const playGame = (playerMove) => {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    console.log(computerMove, playerMove);
    displayResult(computerMove, playerMove);
};

function getMoveName(argMoveId) {
    switch (argMoveId) {
        case 1:
            return 'kamień';
        case 2:
            return 'nożyce';
        case 3:
            return 'papier';
    }
}

function displayResult(computerMove, playerMove) {
    if (computerMove === 'kamień' && playerMove === 'papier') {
        printMessage('Ty wygrywasz!');
    }
    if (computerMove === 'kamień' && playerMove === 'nożyce') {
        printMessage('Ty przegrywasz!');
    }
    if (computerMove === 'kamień' && playerMove === 'kamień') {
        printMessage('Remis!');
    }
    if (computerMove === 'papier' && playerMove === 'papier') {
        printMessage('Remis!');
    }
    if (computerMove === 'papier' && playerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    if (computerMove === 'papier' && playerMove === 'kamień') {
        printMessage('Ty przegrywasz!');
    }
    if (computerMove === 'nożyce' && playerMove === 'papier') {
        printMessage('Ty przegrywasz!');
    }
    if (computerMove === 'nożyce' && playerMove === 'nożyce') {
        printMessage('Remis');
    }
    if (computerMove === 'nożyce' && playerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
    }
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame('kamień');
});
document.getElementById('play-scissors').addEventListener('click', function() {
    playGame('nożyce');
});
document.getElementById('play-paper').addEventListener('click', function() {
    playGame('papier');
});