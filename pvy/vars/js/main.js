//console.log('Script loaded succesfully!');
var i = 5;
var f = 3.14;
var e = 0.1e-3;
var s = '50 - ti Znakový řetězec';
var b = true;
var n = Math.floor(Math.random() * 100);
function oddOrEven(cislo){
    if(isNaN(cislo)) 
        return 'Nan (not a number)';
    if(!Number.isInteger(cislo)) 
        return 'desetinné';
    if(cislo == 0)
        return 'nula';
    else if(cislo % 2 == 0){
        return 'sudé';
    }
    return 'liché';
}
function countDown(cislo){
    var output = '';
    if(isNaN(cislo)) return;
    else if(!Number.isInteger(cislo)) return;
    else{
        for(; cislo != 0; cislo--){
            output += ' '+cislo;
            //console.log(cislo);
        }
    }
    output += ' 0';
    return output;
}

document.getElementById('promenne').innerHTML = '<h3>Náhodné číslo</h3>';
document.getElementById('promenne').innerHTML += '<p>N = '+n+'</p>';
document.getElementById('promenne').innerHTML += 'Číslo je '+oddOrEven(n)+'.';
document.getElementById('cyklus').innerHTML += '<p>'+countDown(n)+'</p>'
//console.log(countDown(n));
//console.log(oddOrEven(n));
//console.log(n);