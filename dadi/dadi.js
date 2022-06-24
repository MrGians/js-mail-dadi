// Dadi
// Definire variabili Globali
// Generare un numero random da 1 a 6 per il giocatore 
// Generare un numero random da 1 a 6 per il computer
// Stabilire il vincitore in base a chi fa il punteggio più alto
// Stampare in console il risultato 
// (ossia se ha vinto il computer o il player)

// [Bonus]: Stampare i risultati nel DOM
// [Bonus]: Prendere i numeri random da un input e verificare al click su un bottone

// Definisco le variabili globali
const userResult = document.getElementById("user-result");
const cpuResult = document.getElementById("cpu-result");
const startGameBtn = document.getElementById("start-game");
const gameResult = document.getElementById("game-result");

let messageResult = "";

// Al click del Bottone "Start!" verrà eseguito tutto il programma
startGameBtn.addEventListener("click", function(){

  // Genera un numero random da 1 a 6 per il giocatore e per il computer 
  const randomUser = Math.floor(Math.random() * 6) + 1;
  const randomCPU = Math.floor(Math.random() * 6) + 1;

  // SE il tuo numero è maggiore del numero CPU
  if (randomUser > randomCPU) messageResult = `Complimenti, ${randomUser} è maggiore di ${randomCPU}. Hai Vinto!`;

  // SE il tuo numero è minore del numero CPU
  if (randomUser < randomCPU) messageResult = `Spiacente, ${randomUser} è minore di ${randomCPU}. Hai Perso!`;

  // SE il tuo numero ed il numero CPU sono uguali
  if (randomUser == randomCPU) messageResult = `Ops, ${randomUser} e ${randomCPU} sono uguali. Pareggio!`;


  // Stampa tutto su pagina
  userResult.innerText = randomUser;
  cpuResult.innerText = randomCPU;
  gameResult.innerText = messageResult;

})



