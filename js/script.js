function playGame(playerInput){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    
    function clearMessages {
        return result;
    }

    function getMoveName(argMoveId) {
      if (argMoveId === 1) {
        return 'kamień';
      }
      if (argMoveId === 2) {
        return 'papier';
      }
      if (argMoveId === 3) {
        return 'nożyce';
      }
    }

    printMessage('Mój ruch to: ' + computerMove);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);
    console.log(getMoveName(2));

    let playerMove = 'nieznany ruch';

    if(playerInput === 1){
      playerMove = 'kamień';
    }else if(playerInput === 2){
        playerMove = 'papier';
    }else if(playerInput === 3){
        playerMove = 'nożyce';
    }

    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove){
        if( argComputerMove === 'kamień' && argPlayerMove === 'papier'){
      printMessage('Ty wygrywasz!');
    }
    }

    if( computerMove === 'kamień' && playerMove === 'papier'){
      printMessage('Ty wygrywasz!');
    }
    if( computerMove === 'kamień' && playerMove === 'nożyce'){
      printMessage('Ty przegrywasz!');
    }
    if( computerMove === 'kamień' && playerMove === 'kamień'){
      printMessage('Remis!');
    }
    if( computerMove === 'papier' && playerMove === 'papier'){
      printMessage('Remis!');
    }
    if( computerMove === 'papier' && playerMove === 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
    if( computerMove === 'papier' && playerMove === 'kamień'){
      printMessage('Ty przerywasz!');
    }
    if( computerMove === 'nożyce' && playerMove === 'papier'){
      printMessage('Ty przegrywasz!');
    }
    if( computerMove === 'nożyce' && playerMove === 'nożyce'){
      printMessage('Remis');
    }
    if( computerMove === 'nożyce' && playerMove === 'kamień'){
      printMessage('Ty wygrywasz!');
    }
    if(playerMove === 'nieznany ruch'){
        printMessage('Spróbuj jeszcze raz')
    }
}
/*document.getElementById('play-rock').addEventListener('click', function(){
  printMessage('Guzik został kliknięty');
});
document.getElementById('play-scizzors').addEventListener('click', function(){
  printMessage('Guzik został kliknięty');
});
document.getElementById('play-paper').addEventListener('click', function(){
  printMessage('Guzik został kliknięty');
});*/

