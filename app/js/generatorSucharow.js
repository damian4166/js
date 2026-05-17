class GeneratorSucharow{
    constructor(idKontenera)
    {
        this.kontener = document.getElementById(idKontenera);
        this.narysujHtml();
    }
    async pobierzSuchara(callback)
    {
        try{
            let odpowiedz = await fetch('https://official-joke-api.appspot.com/random_joke');
            
            // 2. Rozpakuj odpowiedź do formatu, który zrozumie JS (tzw. JSON) i znowu POCZEKAJ
            let dane = await odpowiedz.json();
            // 3. Zrób coś z tymi danymi!
            callback(dane);
        }
        catch(blad){
            console.error("Coś poszło nie tak", blad);
        }
    }

    eventClickButton()
    {
        this.pobierzSuchara(function(pobraneDane){
            let wstep = pobraneDane.setup;
            let point = pobraneDane.punchline;

            document.getElementById("napisy").innerHTML = `${wstep}<br>${point}`;
        });
        
    }
    narysujHtml()
    {
        let przycisk = document.createElement("button");
        przycisk.innerHTML = "Opowiedz mi żart!";
        przycisk.addEventListener("click", this.eventClickButton.bind(this))
        this.kontener.appendChild(przycisk);
        this.kontenerNapisy = document.createElement("div");
        this.kontenerNapisy.setAttribute("id", "napisy");
        this.kontenerNapisy.innerHTML = "Kliknij przycisk aby pobrać żart z serwera...";
        this.kontener.appendChild(this.kontenerNapisy);
    }
}

export default GeneratorSucharow;