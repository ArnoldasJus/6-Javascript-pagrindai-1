'use strict';

let skaicius1 = 2;
let skaicius2 = 3;
let skaicius3 = 5;
let skaicius4 = 8;
let skaicius5 = 12;
let skaicius6 = 17;

let suma = skaicius1+skaicius2+skaicius3+skaicius4+skaicius5+skaicius6;
let sandauga = skaicius1*skaicius2*skaicius3*skaicius4*skaicius5*skaicius6;

console.log('Visu skaiciu suma: ' + suma);
console.log('Visu skaiciu sandauga: ' + sandauga);

let laikinasKintamasis = skaicius1;
skaicius1 = skaicius2;
skaicius2 = laikinasKintamasis;

alert('Sukeitimas su kintamuoju:' + '\n' + 'Sukeistas skaicius1 dabar yra ' + skaicius1 + '\n' + 'Sukeistas skaicius2 dabar yra ' + skaicius2);

skaicius3 = skaicius3 + skaicius4;
skaicius4 = skaicius3 - skaicius4;
skaicius3 = skaicius3 - skaicius4;

alert('Sukeitimas be kintamojo:' + '\n' + 'Sukeistas skaicius3 dabar yra ' + skaicius3 + '\n' + 'Sukeistas skaicius4 dabar yra ' + skaicius4);

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

alert('XOR sukeitimas:' + '\n' + 'Sukeistas skaicius5 dabar yra ' + skaicius5 + '\n' + 'Sukeistas skaicius6 dabar yra ' + skaicius6);

let maxSkaicius = Number.MAX_VALUE;

alert('MAX_VALUE: ' + maxSkaicius);

