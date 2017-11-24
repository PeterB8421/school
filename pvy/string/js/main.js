function spaceCounter(txt){
    var spaces = 0;
    for(i = 0; i < txt.length; i++){
        if(txt.charAt(i) === ' ')
            spaces++;
    }
    return spaces;
}
function crypt(txt, delta){
    var cryptStr = '';
    for(var i = 0; i < txt.length; i++){
        cryptStr += String.fromCharCode(txt.charCodeAt(i) + delta);
    }
    return cryptStr;
}

document.getElementById('submit').addEventListener('click', function(){
    var s = document.getElementById('editor').value;
    //Délka stringu
    document.getElementById('info').innerHTML = '<p>Délka textu: '+s.length+'</p>';
    //Počet mezer
    document.getElementById('info').innerHTML += '<p>Počet mezer v textu: '+spaceCounter(s)+'</p>';
    //Převod na velká písmena
    document.getElementById('upperCase').innerHTML = '<p>'+s.toUpperCase()+'</p>';
    //Malá písmena
    document.getElementById('lowerCase').innerHTML = '<p>'+s.toLowerCase()+'</p>';
    //Šifrování textu
    document.getElementById('crypt').innerHTML = '<p>'+crypt(s, 3)+'</p>';
    //Nahrazování textu
    var o = document.getElementById('oldString').value;
    o = new RegExp(o,'g');
    var n = document.getElementById('newString').value;
    document.getElementById('replaced').innerHTML = '<p>'+s.replace(o,n)+'</p>';
});