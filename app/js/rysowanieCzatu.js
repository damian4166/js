import Api from "./api.js";
class RysowanieCzatu
{
    constructor(idKontenera, adresApi)
    {
        this.idKontenera = idKontenera;
        this.api = new Api(adresApi);
    }
    narysujLogowanie()
    {
        
        document.getElementById(this.idKontenera).innerHTML = "";
        let formularz = document.createElement("form");
        formularz.setAttribute("id","ekran-logowania")
        let input = document.createElement("input");
        let label = document.createElement("h1");
        let button = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("id", "nick");
        label.setAttribute("for","nick");
        label.innerHTML = "Podaj swój nick, aby wejść na czat:<br>";
        button.setAttribute("type", "button");
        button.setAttribute("value","Wejdź na czat")
        button.addEventListener("click",(event) =>{
            //console.log(document.getElementById("nick").value)
            localStorage.setItem('shoutboxNick',nick.value);
            window.location.reload();
        });
        formularz.appendChild(label);
        formularz.appendChild(input);
        formularz.appendChild(button);

        document.getElementById(this.idKontenera).appendChild(formularz);
        

    }
    narysujHeaderCzatu()
    {
        let header = document.createElement("div");
        header.setAttribute("id", "header");
        header.setAttribute("class", "chat-header");

        let label = document.createElement("label");
        label.setAttribute("id", "label");
        label.innerHTML = "Okno czatu";

        let profil = document.createElement("h2");
        profil.setAttribute("id","profil");
        profil.innerHTML = localStorage.getItem("shoutboxNick");

        let logoutButton = document.createElement("input");
        logoutButton.setAttribute("type", "button");
        logoutButton.setAttribute("value","Wyloguj");
        logoutButton.setAttribute("id","btn-wyloguj");
        logoutButton.addEventListener("click", function(){
            localStorage.removeItem("shoutboxNick");
            window.location.reload();
        }.bind(this))
        header.appendChild(label);
        header.appendChild(profil);
        header.appendChild(logoutButton)

        return header;

        
    }
    narysujMainCzatu(dane)
    {
        let mainCzatu = document.createElement("div");
        mainCzatu.setAttribute("id","okno-wiadomosci")
        dane.forEach(element => {
            //console.log(element);
            let wiadomosc = document.createElement("div");
            wiadomosc.setAttribute("class", "msg-box");
            let blokObrazka = document.createElement("div");
            blokObrazka.setAttribute("class","msg-avatar");
            let obrazek = document.createElement("img");
            obrazek.setAttribute("src",`https://api.dicebear.com/9.x/bottts/svg?seed=${element.author}`);
            obrazek.setAttribute("alt","Avatar");
            blokObrazka.appendChild(obrazek);

            let nickName = document.createElement("span");
            nickName.setAttribute("class", "msg-author")
            nickName.innerHTML = element.author;

            let trescWiadomosci = document.createElement("div");
            trescWiadomosci.setAttribute("class", "msg-text")
            trescWiadomosci.innerHTML = element.text;

            let data = document.createElement("span");
            data.setAttribute("class","msg-time");
            var godziny = new Date(element.timestamp).getHours();
            var minuty = new Date(element.timestamp).getMinutes();
            data.innerHTML = `${godziny}:${minuty}`;

            let headerWiadomosci = document.createElement("div");
            headerWiadomosci.setAttribute("class", "msg-header");
            headerWiadomosci.appendChild(nickName)
            headerWiadomosci.appendChild(data)
            let zawartosc = document.createElement("div");
            zawartosc.setAttribute("class","msg-content");
            zawartosc.appendChild(headerWiadomosci);
            zawartosc.appendChild(trescWiadomosci)
            let akcje = document.createElement("div");
            akcje.setAttribute("class", "msg-actions");

            let przyciskAkcji = document.createElement("button");
            przyciskAkcji.setAttribute("class","btn-akcja btn-like");
            przyciskAkcji.innerHTML= "❤️"  // +lajki
            przyciskAkcji.addEventListener("click", function(){
                dajLajka(element.id) 
            });
            akcje.appendChild(przyciskAkcji)
            zawartosc.appendChild(akcje);
            wiadomosc.appendChild(blokObrazka);
            wiadomosc.appendChild(zawartosc);
            
            
            mainCzatu.appendChild(wiadomosc);

        });
        return mainCzatu;
    }
    narysujWysylanieCzatu()
    {
        let wysylanieWiadomosci = document.createElement("form")
        wysylanieWiadomosci.setAttribute("class", "chat-form");
        wysylanieWiadomosci.setAttribute("id","formularz-wiadomosci");
        let wprowadzanaWiadomosc = document.createElement("input");
        wprowadzanaWiadomosc.setAttribute("type","text");
        wprowadzanaWiadomosc.setAttribute("id","input-wiadomosc");
        wprowadzanaWiadomosc.setAttribute("placeholder","Napisz wiadomość...");
        wprowadzanaWiadomosc.required=true;
        wprowadzanaWiadomosc.setAttribute("autocomplete","off");
        let wysylaniePrzycisk = document.createElement("button");
        wysylaniePrzycisk.setAttribute("type","submit");
        wysylaniePrzycisk.innerHTML="Wyślij";

        wysylanieWiadomosci.appendChild(wprowadzanaWiadomosc);
        wysylanieWiadomosci.appendChild(wysylaniePrzycisk);

        wysylanieWiadomosci.addEventListener("submit", async(event) =>{
            event.preventDefault();

            const nowaWiadomosc = {
                author: localStorage.getItem("shoutboxNick"),
                text: document.getElementById("input-wiadomosc").value.trim()
            }

            if(nowaWiadomosc.text=="")
            {
                return;
            }
            this.api.wyslijDane(nowaWiadomosc);

            this.api.pobierzDane(this.replaceMainCzat.bind(this));
            
            wprowadzanaWiadomosc.value="";
        })
        return wysylanieWiadomosci;
    }
    replaceMainCzat(dane)
    {
        let oknoWiadomosci = document.getElementById("okno-wiadomosci");
        let zabezpieczenieSkrolowania;
        let odczytanaWysokosc; 
     
        zabezpieczenieSkrolowania = oknoWiadomosci.scrollHeight - oknoWiadomosci.scrollTop <= oknoWiadomosci.clientHeight + 50
        odczytanaWysokosc = oknoWiadomosci.scrollTop;

        document.getElementById(this.idKontenera).replaceChild(this.narysujMainCzatu(dane), document.getElementById("okno-wiadomosci"));
        oknoWiadomosci = document.getElementById("okno-wiadomosci");
        if(zabezpieczenieSkrolowania)
        {
            oknoWiadomosci.scrollTop = oknoWiadomosci.scrollHeight;
        }
        else
        {
            oknoWiadomosci.scrollTop = odczytanaWysokosc;
        }
    }
    narysujCzat(dane)
    {
        document.getElementById(this.idKontenera).innerHTML = "";
        document.getElementById(this.idKontenera).appendChild(this.narysujHeaderCzatu())
        document.getElementById(this.idKontenera).appendChild(this.narysujMainCzatu(dane))
        
        
        document.getElementById(this.idKontenera).appendChild(this.narysujWysylanieCzatu());
        let oknoWiadomosci = document.getElementById("okno-wiadomosci");
        oknoWiadomosci.scrollTop = oknoWiadomosci.scrollHeight;
    }
}

export default RysowanieCzatu;