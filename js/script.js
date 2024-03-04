/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

//*Chiedi all’utente il suo nome,

const username = prompt('Ciao per prima dammi il tuo nome');
console.log(username);

//*Chiedi all’utente il suo cognome,

const usersurname = prompt('Mi serve adesoo anche il tuo cognome');
console.log(usersurname);

//*Chiedi all’utente il suo colore fav,

const favcolor = prompt('Sceglie adesso un tuo colore favorito');
console.log(favcolor);

//*add number 23,

const number = ('23')
console.log(number);

//! operation sum

const userMessage = username + usersurname + favcolor + number; 

//TODO Infine scrive sulla pagina nomecognomecolorepreferito23

document.getElementById('your_info').innerHTML = userMessage;