
//standardna funkcija
let rezultatSt = function StandarnaFunkcija(x){
    return x*2;
}

//arrow funkcija OD ES standarda 6. verzija
//za jednu liniju kod ne trebaju {}
let rezultatArrow = (x) =>  x*2;



console.log("Standardna funkcija: "+rezultatSt(7));
console.log("Arrow funkcija: "+ rezultatArrow(7));