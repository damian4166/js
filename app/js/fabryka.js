import Osobowe from "./osobowe.js";
import Ciezarowe from "./ciezarowe.js";

class Fabryka
{
    stworzPojazd(typPojazdu, nazwa)
    {
        if(typPojazdu === "osobowe")
        {
            return new Osobowe(nazwa);
        }
        else if(typPojazdu === "ciezarowe")
        {
            return new Ciezarowe(nazwa);
        }
        else
        {
            return `Brak mozliwosci utworzenia pojazdu o typie: ${typPojazdu}`;
        }
    }
}

export default Fabryka;