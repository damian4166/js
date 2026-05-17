const sum = require('./math');

test('dodaje 1+2, aby otrzymac 3',() => {
const wynik = sum(1,2);

expect(wynik).toBe(3);
});