import Api from "./api.js";
import RysowanieCzatu from "./rysowanieCzatu.js";
class Czat
{
    constructor(idKontenera, adresApi)
    {
        this.api = new Api(adresApi);
        this.rysowanieCzatu = new RysowanieCzatu(idKontenera);
        this.inicjalizujHtml();
    }

    
    inicjalizujCzat()
    {
        console.log("Rysuje Czat");
        this.api.pobierzDane(this.rysowanieCzatu.narysujCzat.bind(this.rysowanieCzatu));

    }
    inicjalizujHtml()
    {
        let shoutboxNick = localStorage.getItem("shoutboxNick");
        if(!shoutboxNick)
        {
            this.rysowanieCzatu.narysujLogowanie();
            return;
        }
        this.inicjalizujCzat();
        
        
    }
}

export default Czat;