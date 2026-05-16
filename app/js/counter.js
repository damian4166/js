class Counter
{ 
    constructor(idKontenera)
    {
        this.licznikKlikniec = 0;
        this.kontener = document.getElementById(idKontenera);
        this.narysujHtml();
    }
    wyswietlKlikniecia()
    {
        console.log(this.licznikKlikniec)
        this.kontenerNapisy.innerHTML =`Brawo! Kliknięto mnie ${this.licznikKlikniec} razy.`;
    }
    createResetButton()
    {
        let reset = document.createElement("button");
        reset.setAttribute("id","reset");
        reset.innerHTML = "Resetuj";
        reset.addEventListener("click", this.eventClickReset);
        kontenerPrzyciski.appendChild(reset);
    }
    eventClickReset()
    {
        this.licznikKlikniec = 0;
        this.kontenerPrzyciski.removeChild(reset);
        this.wyswietlKlikniecia();
    }
    eventClickButton()
    {
        this.licznikKlikniec++;
        if(this.licznikKlikniec == 1)
        {
           createResetButton();
        }
        console.log(this.wyswietlKlikniecia);
        console.log(this.licznikKlikniec);
        this.wyswietlKlikniecia();
    }
    narysujHtml()
    {
        let przycisk = document.createElement("button");
        przycisk.innerHTML = "Naciśnij mnie";
        przycisk.addEventListener("click", this.eventClickButton)
        this.kontenerPrzyciski = document.createElement("div");
        this.kontenerPrzyciski.setAttribute("id","przyciski");
        this.kontenerPrzyciski.appendChild(przycisk);
        this.kontener.appendChild(this.kontenerPrzyciski);
        this.kontenerNapisy = document.createElement("div");
        this.kontenerNapisy.setAttribute("id", "napisy");
        this.kontenerNapisy.innerHTML = "Czekam na kliknięcie...";
        this.kontener.appendChild(this.kontenerNapisy);
    }

}