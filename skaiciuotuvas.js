'use strict';

// Lauku valymas

function valyti(){
    document.getElementById("skaicius1").value = "";
    document.getElementById("skaicius2").value = "";
    document.getElementById("skaicius3").value = "";
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

    let skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    let skaicius2 = parseFloat(document.querySelector('#skaicius2').value);
    let skaicius3 = parseFloat(document.querySelector('#skaicius3').value);
    let didziausias;

    if(skaicius1 >= skaicius2 && skaicius1 >= skaicius3 ) {
        didziausias = skaicius1;
    } else if(skaicius2 >= skaicius1 && skaicius2 >= skaicius3){
        didziausias = skaicius2;
    } else {
        didziausias = skaicius3;
    } 

    document.querySelector('#papildoma_informacija').value = ('Didžiausias skaičius iš trijų yra ' + didziausias);

});

// Ar galima sudaryti trikampi?

document.querySelector('#ar_trikampis').addEventListener('click', function(){
    console.log('Ar trikampis mygtukas paspaustas');

    let skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    let skaicius2 = parseFloat(document.querySelector('#skaicius2').value);
    let skaicius3 = parseFloat(document.querySelector('#skaicius3').value);

    if(skaicius1 + skaicius2 > skaicius3 && skaicius1 + skaicius3 > skaicius2 && skaicius2 + skaicius3 > skaicius1) {
        document.querySelector('#papildoma_informacija').value = ('Taip, toks trikampis gali egzistuoti');
    } else {
        document.querySelector('#papildoma_informacija').value = ('Ne, toks trikampis neegzistuoja');
    }

});