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
            console.log(dane)
            callback(dane);
        }
        catch(blad){
            console.error("Coś poszło nie tak", blad);
        }
    }
}



export default Api;