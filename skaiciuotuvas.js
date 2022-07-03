'use strict';

// Lauku valymas

function valyti(){
    document.getElementById("skaicius1").value = "";
    document.getElementById("skaicius2").value = "";
    document.getElementById("papildoma_informacija").value = "";
};

document.querySelector('#valyti').addEventListener('click', function(){
    console.log('Valymo mygtukas paspaustas');
    document.querySelector('#skaiciuotuvo_rezultatas').innerHTML = "";
});

// Aritmetiniai veiksmai

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

// Salygos sakiniai

document.querySelector('#kuris_didziausias').addEventListener('click', function(){
    console.log('Kuris didziausias mygtukas paspaustas');

    let skaicius1;
    let skaicius2;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    if (skaicius1>skaicius2) {
       document.querySelector('#papildoma_informacija').value = "Skaičius 1 yra didesnis";
    } else if(skaicius2>skaicius1) {
        document.querySelector('#papildoma_informacija').value = "Skaičius 2 yra didesnis";
    } else {
      document.querySelector('#papildoma_informacija').value = "Skaičiai yra lygūs";
    }
});