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

    //nazwa, cena, typ
}
export default Koszyk