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
uczen.powitanie();


