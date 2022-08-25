const costoKM = 0.21;
let scontoApplicato = 0;
// Prendere il primo elemento con la classe e non con ID
const bottoneConferma = document.querySelector('btn-success')
// querySelectorAll per prendere tutti gli elementi con quella classe
const stampanomecognome = document.getElementById('stampanomecognome');
const stampaprezzo = document.getElementById('stampaprezzo');



let nameSurname = document.getElementById('namesurname'); 
console.log(nameSurname); 

let KMInseriti = document.getElementById('kilometers'); 
console.log(KMInseriti); 

let EtaInserita = document.getElementById('age'); 
console.log(EtaInserita); 

// Calcolo prezzo del biglietto
bottoneConferma.addEventListener('click', function() {
    
    stampanomecognome.innerHTML = nameSurname.value
    
    let PrezzoBiglietto = costoKM * KMInseriti.value
    console.log(PrezzoBiglietto); 

    // Calcolo del prezzo finale del biglietto con possibile sconto 
    
    const prezzoFinale = PrezzoBiglietto - scontoApplicato; 
    console.log(prezzoFinale); 
    
    // Stampa del prezzo su schermo 

    // Condizione sconto
    if (EtaInserita < 18) { 
    
        scontoApplicato = (PrezzoBiglietto * 0.2); 
        console.log(scontoApplicato); 
    } 

    else if (EtaInserita > 65) { 
    
        scontoApplicato = (PrezzoBiglietto * 0.4); 
        console.log(scontoApplicato); 
    } 
    
    const printPrezzo = prezzoFinale.toFixed(2); 
    
    stampaprezzo.innerHTML = "Il prezzo del biglietto è: €" + printPrezzo;
    
}

) 


