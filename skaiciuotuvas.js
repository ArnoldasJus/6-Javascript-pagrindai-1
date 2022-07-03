'use strict';
// let skaicius1;
// let skaicius2;
// let suma;
// let atimtis;
// let sandauga;
// let dalyba;
// let skaiciuotuvo_rezultatas;
function valyti(){
    document.getElementById("skaicius1").value = "";
    document.getElementById("skaicius2").value = "";
    // document.getElementById("skaiciuotuvo_rezultatas").value = "";
};

document.querySelector('#valyti').addEventListener('click', function(){
    console.log('Valymo mygtukas paspaustas');
    document.querySelector('#skaiciuotuvo_rezultatas').innerHTML = "";
});

document.querySelector('#sudeti').addEventListener('click', function(){
    console.log('Sudeties mygtukas paspaustas');

    let skaicius1;
    let skaicius2;
    let skaiciuotuvo_rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    skaiciuotuvo_rezultatas = skaicius1 + skaicius2;

    document.querySelector('#skaiciuotuvo_rezultatas').append(skaiciuotuvo_rezultatas);
});

document.querySelector('#atimti').addEventListener('click', function(){
    console.log('Atimties mygtukas paspaustas');

    let skaicius1;
    let skaicius2;
    let skaiciuotuvo_rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    skaiciuotuvo_rezultatas = skaicius1 - skaicius2;

    document.querySelector('#skaiciuotuvo_rezultatas').append(skaiciuotuvo_rezultatas);
});

document.querySelector('#dauginti').addEventListener('click', function(){
    console.log('Daugybos mygtukas paspaustas');

    let skaicius1;
    let skaicius2;
    let skaiciuotuvo_rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    skaiciuotuvo_rezultatas = skaicius1 * skaicius2;

    document.querySelector('#skaiciuotuvo_rezultatas').append(skaiciuotuvo_rezultatas);
});

document.querySelector('#dalinti').addEventListener('click', function(){
    console.log('Dalybos mygtukas paspaustas');

    let skaicius1;
    let skaicius2;
    let skaiciuotuvo_rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    skaiciuotuvo_rezultatas = skaicius1 / skaicius2;

    document.querySelector('#skaiciuotuvo_rezultatas').append(skaiciuotuvo_rezultatas);
});