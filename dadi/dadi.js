// Dadi
// Generare un numero random da 1 a 6 per il giocatore 
// Generare un numero random da 1 a 6 per il computer
// Stabilire il vincitore in base a chi fa il punteggio più alto
// Stampare in console il risultato 
// (ossia se ha vinto il computer o il player)

// [Bonus]: Stampare i risultati nel DOM
// [Bonus]: Prendere i numeri random da un input e verificare al click su un bottone

// Genera un numero random da 1 a 6 per il giocatore e per il computer 
const randomUser = Math.floor(Math.random() * 6) + 1;
const randomCPU = Math.floor(Math.random() * 6) + 1;

// Stampa in console il numero random di ciascun giocatore
console.log(`User Number:  ${randomUser}`);
console.log(`CPU Number: ${randomCPU}`);


// SE il tuo numero è maggiore del numero CPU
if (randomUser > randomCPU) console.log(`Complimenti, ${randomUser} è maggiore di ${randomCPU}. Hai Vinto!`);

// SE il tuo numero è minore del numero CPU
if (randomUser < randomCPU) console.log(`Spiacente, ${randomUser} è minore di ${randomCPU}. Hai Perso!`);

// SE il tuo numero ed il numero CPU sono uguali
if (randomUser == randomCPU) console.log(`Ops, ${randomUser} e ${randomCPU} sono uguali. Pareggio!`);

