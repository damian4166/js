import {PI, dodaj} from './matematyka.js'
import Kalkulator from './matematyka.js';

import Counter from './counter.js' ;

import Koszyk from './koszyk.js';


console.log("Liczba PI to:", PI);
console.log("Wynik dodawania:",dodaj(5,10))
let mojKalkulator = new Kalkulator();

let counter = new Counter("container");

let koszyk = new Koszyk();
koszyk.dodajItem("Ołówek");
koszyk.dodajItem("Długopis");
koszyk.pokazKoszyk();

let koszykDrugi = new Koszyk();

koszykDrugi.dodajItem("Zeszyt");
koszykDrugi.dodajItem("Komputer");
koszykDrugi.pokazKoszyk();
koszyk.pokazKoszyk();
