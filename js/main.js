// Calcoliamo il prezzo totale in base al tipo di lavoro 
let button = FinalPrice
console.log = FinalPrice


let promoCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calcoloPrezzo() 
{

    ore = parseInt(hours);
    let hours = document.getElementById("hours").value; 

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
        case "3": // FullStack
            prezzo = hours * 33.6;
            total = price - (price * promoValue);

            break;
    }

    total = total.toFixed(2);
    console.log("total " + total);

    document.getElementById("FinalPrice").innerHTML = "Il totale è di : " + total + "\u20AC";

}

 //Calcoliamo lo sconto 

function sales(_promoCode) { 

    let sald = document.getElementById("Sald").value; 
    sald = sald.toUpperCase();
    let promoValue = 0;

    let bool = false; 
    for (let i = 0; i < lista.length; i++)
    {

        if (sald == lista[i])
        { 
            bool = true;
            promoValue = 0.25;
            break;

        } else if (sald == "") 
        { 
            promoValue = null;
            break;
        }
    } 
    return promoValue;
}

