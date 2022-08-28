const costoKM = 0.21;
let scontoApplicato = 0;
const form = document.getElementById('form');

// Calcolo prezzo del biglietto
form.addEventListener('submit', function() {

    let nameSurname = document.getElementById('namesurname').value; 
    console.log(nameSurname); 

    let KMInseriti = document.getElementById('kilometers').value; 
    console.log(KMInseriti); 

    let EtaInserita = document.getElementById('age').value; 
    console.log(EtaInserita);   

    
    let PrezzoBiglietto = costoKM * KMInseriti;
    console.log(PrezzoBiglietto); 

    // Condizione sconto
    if (isNaN(KMInseriti) || isNaN(EtaInserita)) {

        alert('Non hai inserito dei numeri');

    }

    if (EtaInserita < 18) { 
    
         scontoApplicato = (PrezzoBiglietto * 0.2); 
         console.log(scontoApplicato); 
    } 

    else if (EtaInserita > 65) { 
    
         scontoApplicato = (PrezzoBiglietto * 0.4); 
         console.log(scontoApplicato); 
    } 

    // // Calcolo del prezzo finale del biglietto con possibile sconto 

    const prezzoFinale = PrezzoBiglietto - scontoApplicato; 
    console.log(prezzoFinale); 

    // Stampa dei risultati

    document.getElementById('codicebiglietto').innerHTML = Math.floor(Math.random()*100000);
    document.getElementById('numerocarrozza').innerHTML = Math.floor(Math.random()*15);
    document.getElementById('stampanomecognome').innerHTML = nameSurname;
    document.getElementById('stampaprezzo').innerHTML = "Il prezzo del biglietto è: €" + prezzoFinale.toFixed(2);
    
}

) 


