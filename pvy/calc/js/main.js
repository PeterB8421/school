function obsahCtverec(){
    var vysledek;
    var a = document.getElementById('ctvStrana_a').value;
    var jednotka = '';
    jednotka = document.getElementById('sCtvJedn').value;
    vysledek = a*a;
    document.getElementById('vysObshCtv').innerHTML = '<p class="vysledek">Obsah čtverce je: <b>'+vysledek+ ' ' +jednotka+'</b><sup>2</sup>.';
    return;
}
function obsahObdelniku(){
    var vysledek;
    var a = document.getElementById('obdStrana_a').value;
    var b = document.getElementById('obdStrana_b').value;
    var jednotka = '';
    jednotka = document.getElementById('sObdJedn').value;
    vysledek = a*b;
    document.getElementById('vysObshObd').innerHTML = '<p class="vysledek">Obsah obdélníka je: <b>'+vysledek+ ' ' +jednotka+'</b><sup>2</sup>.';
    return;
}
function obsahKrychle(){
    var vysledek;
    var a = document.getElementById('krychStrana_a').value;
    var jednotka = '';
    jednotka = document.getElementById('sKrychJedn').value;
    vysledek = 6*(a*a);
    document.getElementById('vysObshKrych').innerHTML = '<p class="vysledek">Obsah krychle je: <b>'+vysledek+ ' ' +jednotka+'</b><sup>2</sup>.';
    console.log("Done");
    return;
}
function obsahKvadru(){
    var vysledek;
    var a = document.getElementById('kvadrStrana_a').value;
    var b = document.getElementById('kvadrStrana_b').value;
    var c = document.getElementById('kvadrStrana_c').value;
    var jednotka = '';
    jednotka = document.getElementById('sKvadrJedn').value;
    vysledek = a*b*c;
    document.getElementById('vysObshKvadr').innerHTML = '<p class="vysledek">Obsah kvádru je: <b>'+vysledek+ ' ' +jednotka+'</b><sup>2</sup>.';
    return;
}
function randGen(){
    var cislo = Math.ceil(Math.random()*20);
    document.getElementById('vypisNah').innerHTML = '<b class="text-center">'+cislo+'</b>';
    return;
}
function doplnJednotku(z, i){
    var jedn;
    console.log(z);
    console.log(i);
    jedn = document.getElementById(z).value;
    document.getElementById(i).innerHTML = '<p>'+jedn+'</p>';
    return;
}
document.getElementById('ctvObsCount').addEventListener('click', function(){
    obsahCtverec();
});
document.getElementById('obdObsCount').addEventListener('click', function(){
    obsahObdelniku();
});
document.getElementById('sObdJedn').addEventListener('click', function(){
    document.getElementById('jednObd').innerHTML = '<p>'+document.getElementById('sObdJedn').value;+'</p>';
})
document.getElementById('sKvadrJedn').addEventListener('click', function(){
    document.getElementsByClassName('jednKvadr').innerHTML = '<p>'+document.getElementById('sKvadrJedn').value;+'</p>';
})
document.getElementById('krychObsCount').addEventListener('click', function(){
    obsahKrychle();
})
document.getElementById('kvadrObsCount').addEventListener('click', function(){
    obsahKvadru();
})
document.getElementById('genNrCount').addEventListener('click', function(){
    randGen();
})
document.getElementById('sObdJedn').addEventListener('mouseleave', function(){
    doplnJednotku('sObdJedn', 'obdJedn');
})
document.getElementById('sKvadrJedn').addEventListener('mouseleave', function(){
    doplnJednotku('sKvadrJedn', 'jednKvadr1');
    doplnJednotku('sKvadrJedn', 'jednKvadr2');
})
doplnJednotku('sObdJedn', 'jednObd');
doplnJednotku('sKvadrJedn', 'jednKvadr1');
doplnJednotku('sKvadrJedn', 'jednKvadr2');