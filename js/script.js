/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

//*Chiedi all’utente il suo nome,

const username = prompt('Dammi il tuo nome');
console.log(username);

//*Chiedi all’utente il suo cognome,

const usersurname = prompt('Dammi il tuo cognome');
console.log(usersurname);

//*Chiedi all’utente il suo colore fav,

const favcolor = prompt('Dammi il tuo colore favorito');
console.log(favcolor);

//*add number 23,

const number = ('23')
console.log(number);

//! Risultato

const userMessage = username + usersurname + favcolor + number; 

//TODO Infine scrivi sulla pagina nomecognomecolorepreferito23

document.getElementById('your_info').innerHTML = userMessage;