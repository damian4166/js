import Api from "./api.js";
import RysowanieCzatu from "./rysowanieCzatu.js";
import Auth from "./auth.js";
class Czat
{
    constructor(idKontenera, adresApi)
    {
        this.api = new Api(adresApi);
        this.rysowanieCzatu = new RysowanieCzatu(idKontenera, adresApi);
        this.auth = new Auth();
        this.startCzat();
    }
    startCzat()
    {
        if(this.auth.isLoged())
        {
            this.rysujCzat();
            setInterval(this.odswierzCzat.bind(this),3000);
            return;
        }
        this.rysowanieCzatu.narysujLogowanie();
    }
    rysujCzat()
    {
        this.api.pobierzDane(this.rysowanieCzatu.narysujCzat.bind(this.rysowanieCzatu));
    }
    odswierzCzat()
    {
        this.api.pobierzDane(this.rysowanieCzatu.replaceMainCzat.bind(this.rysowanieCzatu));
    }
}

export default Czat;