class RysowanieCzatu
{
    constructor(idKontenera)
    {
        this.idKontenera = idKontenera;
    }
    narysujLogowanie()
    {
        console.log("Rysuje logowanie");
        let formularz = document.createElement("form");
        let input = document.createElement("input");
        let label = document.createElement("label");
        let button = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("id", "nick");
        label.setAttribute("for","nick");
        label.innerHTML = "Podaj swój nick, aby wejść na czat:<br>";
        button.setAttribute("type", "button");
        button.setAttribute("value","Wejdź na czat")
        button.addEventListener("click",function(){
            //console.log(document.getElementById("nick").value)
            localStorage.setItem('shoutboxNick',nick)
            this.narysujCzat();
        }.bind(this));
        formularz.appendChild(label);
        formularz.appendChild(input);
        formularz.appendChild(button);

        document.getElementById(this.idKontenera).appendChild(formularz)
    }
    narysujCzat(dane)
    {
        document.getElementById(this.idKontenera).innerHTML="";
    }
}

export default RysowanieCzatu;