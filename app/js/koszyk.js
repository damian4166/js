class Koszyk{
    constructor()
    {
        if(Koszyk.instancja)
        {
            return Koszyk.instancja;
        }
        this.items = new Array();
        Koszyk.instancja = this;
        this.wczytajZLocalStorage()
    }
    wczytajZLocalStorage()
    {
        let localKoszyk = JSON.parse(localStorage.getItem('localKoszyk'));
        if(localKoszyk)
        {
            this.items = localKoszyk;
            console.log("if")
        }
        console.log("Wczytuje",localKoszyk);
    }
    zapiszDoLocalStorage()
    {
        localStorage.setItem('localKoszyk', JSON.stringify(this.items))
        console.log("zapisuje",this.items);
    }
    dodajItem(item)
    {
        this.items.push(item);
        this.zapiszDoLocalStorage();
    }
    pokazKoszyk()
    {
        console.log(this.items);
    }
    zwrocKoszyk()
    {
        return this.items;
    }

    //nazwa, cena, typ
}
export default Koszyk;