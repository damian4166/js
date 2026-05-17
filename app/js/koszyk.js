class Koszyk{
    constructor()
    {
        if(Koszyk.instancja)
        {
            return Koszyk.instancja;
        }
        this.items = [];
        Koszyk.instancja = this;
    }
    dodajItem(item)
    {
        this.items.push(item);
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
module.exports = Koszyk;