// Mail
// Definisco variabili globali
// Creare una lista di indirizzi email autorizzati.
// Chiedere email all'utente
// Verificare che sia nella lista di indirizzi mail autorizzati
// Stampare in console un messaggio appropriato sull’esito del controllo. 
// ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è)

// [Bonus]: Stampare i risultati nel DOM
// [Bonus]: Provare a prendere la mail da un input e verificare al click su un bottone

// Definisco variabili globali
const userEmailInput = document.getElementById("user-email");
const accessButton = document.getElementById("access-button");

// Lista di inidirizzi email autorizzati
const authorizedEmails = ["gianluca@bool.it", "gennaro@bool.it", "pippo@bool.it"];



// Al click del Bottone "Accedi" verrà eseguita la verifica
accessButton.addEventListener("click", function() {
  
  // Recupero Email dell'utente
  const userEmail = userEmailInput.value;

  // Creo variabile per gestione degli alert
  let accessAllowed = "Ci dispiace, non sei autorizzato ad accedere!";

  // Verifico se Email Utente è nella lista delle "Mail Autorizzate"
  for (let i = 0; i < authorizedEmails.length; i++) {
  
    if (authorizedEmails[i] == userEmail) {
      accessAllowed = "Benvenuto, ti stiamo reindirizzando alla tua casella di posta, attendere prego...";
    }
  
  
}

// Avviso l'utente se la verifica è andata a buon fine o meno
alert(accessAllowed);

})


