class Osoba{
    imie;
    nazwisko;
    powitanie()
    {
        document.getElementById("container").innerText = `Cześć, jestem ${this.imie} ${this.nazwisko}`;
    }

    constructor(imie_k, nazwisko_k)
    {
        this.imie = imie_k;
        this.nazwisko = nazwisko_k;
    }
};

let uczen = new Osoba("Tadeusz", "Kowalski");
//uczen.powitanie();
/*
let kontener = document.getElementById("container")
kontener.innerText = "Czekam na kliknięcie...";

let kontenerPrzyciski = document.getElementById("przyciski");

let przycisk = document.getElementById("przycisk");
let licznikKlikniec = 0;
function wyswietlKlikniecia()
{
    kontener.innerHTML =`Brawo! Kliknięto mnie ${licznikKlikniec} razy.`;
}
przycisk.addEventListener("click", function(){
    licznikKlikniec++
    if(licznikKlikniec == 1)
    {
        let reset = document.createElement("button");
        reset.setAttribute("id","reset")
        reset.innerHTML = "Resetuj";
        reset.addEventListener("click", function(){
            licznikKlikniec = 0;
            kontenerPrzyciski.removeChild(reset);
            wyswietlKlikniecia();
        })
        kontenerPrzyciski.appendChild(reset);
    }
    wyswietlKlikniecia();
})*/

let counter = new Counter("container");