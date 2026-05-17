class RysowanieCzatu
{
    constructor(idKontenera)
    {
        this.idKontenera = idKontenera;
    }
    narysujLogowanie()
    {
        document.getElementById(this.idKontenera).innerHTML = "";
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
            localStorage.setItem('shoutboxNick',nick.value)
            this.narysujCzat();
        }.bind(this));
        formularz.appendChild(label);
        formularz.appendChild(input);
        formularz.appendChild(button);

        document.getElementById(this.idKontenera).appendChild(formularz)
    }
    narysujHeaderCzatu()
    {
        let header = document.createElement("div");
        header.setAttribute("id", "header");

        let label = document.createElement("label");
        label.setAttribute("id", "label");
        label.innerHTML = "Okno czatu";

        let profil = document.createElement("span");
        profil.setAttribute("id","profil");
        profil.innerHTML = localStorage.getItem("shoutboxNick");

        let logoutButton = document.createElement("input");
        logoutButton.setAttribute("type", "button");
        logoutButton.setAttribute("value","Wyloguj");
        logoutButton.addEventListener("click", function(){
            localStorage.removeItem("shoutboxNick");
            this.narysujLogowanie();
        }.bind(this))
        header.appendChild(label);
        header.appendChild(profil);
        header.appendChild(logoutButton)

        return header;

        
    }
    narysujMainCzatu()
    {

    }
    narysujWysylanieCzatu()
    {

    }
    narysujCzat(dane)
    {
        document.getElementById(this.idKontenera).innerHTML = "";
        document.getElementById(this.idKontenera).appendChild(this.narysujHeaderCzatu())

    }
}

export default RysowanieCzatu;