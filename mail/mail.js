// Mail
// Creare una lista di indirizzi mail autorizzati.
// Chiedere email utente
// Verificare che sia nella lista di indirizzi mail autorizzati
// Stampare in console un messaggio appropriato sull’esito del controllo. 
// ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è)

// [Bonus]: Stampare i risultati nel DOM
// [Bonus]: Provare a prendere la mail da un input e verificare al click su un bottone

console.log("js ok")

const authorizedEmails = ["gianluca@bool.it", "gennaro@bool.it", "pippo@bool.it"];
const userEmail = prompt("Inserisci la tua Email per accedere", "gianluca@bool.it");

let accessAllowed = "Spiacenti";


console.table(authorizedEmails);
console.log("Email utente: " + userEmail);

for (let i = 0; i < authorizedEmails.length; i++) {
  console.log(authorizedEmails[i]);
  
  
  if (authorizedEmails[i] == userEmail) {
    accessAllowed = "Benvenuto";
  }
  
}

console.log(accessAllowed);