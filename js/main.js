// Calcoliamo il prezzo totale in base al tipo di lavoro 

document.getElementById("button").addEventListener("click", calcoloPrezzo);
let promoCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calcoloPrezzo() 
{
    let hours = document.getElementById("hours").value; 
    ore = parseInt(hours);
    let typeWork = document.getElementById("typeWork").value;
    let promoValue = sales(listaSconti);

    if (promoValue == null) {
        alert("Codice sconto inserito non valido.");
    }

    let price, total;
    switch (typeWork) {
        case "1": // BackEnd
            price = (hours* 20.5);
            total = price - (price * promoValue);
            break;
        case "2": // FrontEnd
            price = hours * 15.3;
            total = price - (price * promoValue);

            break;
        case "3": // Fullstack
            prezzo = hours * 33.6;
            total = price - (price * promoValue);

            break;
    }

    total = total.toFixed(2);
    console.log("totale " + total);

    document.getElementById("FinalPrice").innerHTML = "Il totale è di : " + totale + "\u20AC";
}

