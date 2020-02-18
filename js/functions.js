function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


/*let playerMove = 'papier';
printMessage('Zagralem ' + playerMove + '! Jesli Twój ruch to nozyce, to wygrywasz!');*/

let randomFraction = Math.random();

printMessage('Wylosowany ulamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ulamek pomnozony przez 3 i powiekszony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokragleniu w dól to: ' + roundNumber);