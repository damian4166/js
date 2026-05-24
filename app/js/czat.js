import Api from "./api.js";
import RysowanieCzatu from "./rysowanieCzatu.js";
import Auth from "./auth.js";
class Czat
{
    constructor(idKontenera, adresApi)
    {
        this.api = new Api(adresApi);
        this.rysowanieCzatu = new RysowanieCzatu(idKontenera);
        this.auth = new Auth();
        this.startCzat();
    }
    startCzat()
    {
        if(this.auth.isLoged())
        {
            console.log("zalogowany")
            this.rysujCzat();
            setInterval(this.rysujCzat(),3000);
            return;
        }
        console.log("niezalogowany");
        this.rysowanieCzatu.narysujLogowanie();
    }
    rysujCzat()
    {
        this.api.pobierzDane(this.rysowanieCzatu.narysujCzat.bind(this.rysowanieCzatu));
    }
}

export default Czat;