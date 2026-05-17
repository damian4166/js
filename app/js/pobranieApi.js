async function pobierzDane()
{
    try{
        let odpowiedz = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        
        // 2. Rozpakuj odpowiedź do formatu, który zrozumie JS (tzw. JSON) i znowu POCZEKAJ
        let dane = await odpowiedz.json();
        
        // 3. Zrób coś z tymi danymi!
        console.log(dane);
    }
    catch(blad){
        console.error("Coś poszło nie tak", blad);
    }
}

export default pobierzDane;