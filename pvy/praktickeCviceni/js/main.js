//question
function otazka(){
    var odpoved = prompt('Jakou zkratkou označujeme barevný model, který se využívá pro zobrazení barev na monitoru?');
    if(odpoved == 'rgb' || odpoved == ('RGB')){
        alert('Jsi machr!');
        document.getElementById('otazka').style.backgroundColor = "yellow";
    }
    else{
        alert('Nemachruj, když to nevíš!');
        document.getElementById('otazka').style.backgroundColor = "red";
        document.getElementById('otazka').style.color = "white";
    }
    return;
}
//reset button
function reset(){
    document.getElementById('otazka').style.backgroundColor = "white";
    document.getElementById('otazka').style.color = "black";
}
//datum
function data(){
    var d = new Date();
    var day = d.getDate();
    var month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    month = month[d.getMonth()];
    var year = d.getFullYear();
    document.getElementById('datum').innerHTML = ''+day+'.'+month+'.'+year;
    document.getElementById('rok').innerHTML = 'Rok '+year;
    document.getElementById('pololeti').innerHTML = ''+pololeti(d.getMonth());
    return;
}
function pololeti(mesic){
    if(mesic >= 1 && mesic <= 5)
        return "II. pololetí";
    else if(mesic >= 8 && mesic <= 11)
        return "I. pololetí";
    else
        return "prázdniny";
}
function lichaCisla(min, max){
    console.log("lichaCisla() working!")
    var cislo = min;
    var tabulka = '';
    while(cislo <= max){
        if(cislo % 2 != 0)
            tabulka += '<td>'+cislo+'</td>';
        cislo++;
    }
    console.log(tabulka);
    return tabulka;
}
//main
//listeners
document.getElementById('odpovez').addEventListener('click', function(){otazka()});
document.getElementById('reset').addEventListener('click', function(){reset()});
document.getElementById('bean').addEventListener('mouseenter', function(){
    this.src = "img/bean2.jpg";
})
document.getElementById('bean').addEventListener('mouseleave', function(){
    this.src = "img/bean1.jpg";
})
//innerHTMLs
document.getElementById('vypis').innerHTML = ''+lichaCisla(10, 40);
//voids
data();