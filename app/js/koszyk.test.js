const Koszyk = require('./koszyk');

test('dodaje item 1, aby otrzymac jeden element w koszyku', () => {
    let testowyKoszyk = new Koszyk();
    testowyKoszyk.dodajItem("długopis");
    const wynik = testowyKoszyk.zwrocKoszyk();
    expect(wynik).toEqual(["długopis"]);

})