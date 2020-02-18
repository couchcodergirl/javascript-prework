function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let playerMove = 'papier';
printMessage('Zagralem ' + playerMove + '! Jesli Twój ruch to nozyce, to wygrywasz!');


