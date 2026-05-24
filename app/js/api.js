class Api{
    constructor(adresApi)
    {
        if(Api.instancja)
        {
            return Api.instancja;
        }

        this.adresApi = adresApi;
        Api.instancja = this;
    }
    async pobierzDane(callback)
    {
        try{
            
            let odpowiedz = await fetch(this.adresApi);
            
            // 2. Rozpakuj odpowiedź do formatu, który zrozumie JS (tzw. JSON) i znowu POCZEKAJ
            let dane = await odpowiedz.json();
            
            // 3. Zrób coś z tymi danymi!
            callback(dane);
        }
        catch(blad){
            console.error("Coś poszło nie tak", blad);
        }
    }
    async wyslijDane(dane)
    {
        try {
            await fetch(this.adresApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dane)
            });
        } catch (error) {
            console.error("Błąd wysyłania:", error);
            alert("Nie udało się wysłać wiadomości.");
        }        
    }
}



export default Api;