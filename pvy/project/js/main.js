var words = ["OPAVA", "STROJ", "MASOPUST", "WINDOWS", "LINUX", "VELIKOST", "VISUAL", "STUDIO", "MICROSOFT", "PRAHA", "VLTAVA", "EXPLOZE"];
var chosen = Math.floor(Math.random() * words.length);
var wrong = 0;
var correct = 0;
var tries = 0;
var clicked = [];
var correctLetters = [];
createCells(words[chosen]);
fillAlphabet(words[chosen]);
document.getElementById('again').addEventListener('click', function(){
    location.reload();
});

function fillAlphabet(word){
    var s = '';
    for(i = 65; i <= 90; i++){
        s += '<td><a id="'+String.fromCharCode(i)+'" ref="#" class="abc" onclick="checkForLetter(\''+String.fromCharCode(i)+'\', \''+word+'\')">'
        +String.fromCharCode(i)+'</a></td> ';
    }
    document.getElementById('alphabet').innerHTML = s;
    return;
}

function complete(){
    document.getElementById('message').innerHTML = '<b>DOKONČENO!</b> <br> Hru jsi zvládl na '+(++tries)+'. pokus, z toho bylo špatně '+wrong+' pokusů.';
    document.getElementById('alphabet').innerHTML = ' ';
    return;
}

function failed(){
    document.getElementById('message').innerHTML = 'Nezvládl jsi to :( <br> Ani na '+tries+'. pokus jsi to nedokázal. Slovo na uhodnutí bylo '+words[chosen]+'.';
    document.getElementById('alphabet').innerHTML = ' ';
    return;
}

function checkForLetter(letter, word){
    letter = String(letter);
    var letterCount = 0;
    if(clicked.length != 0){
        for(i = 0; i < clicked.length; i++){
            if(clicked[i] == letter)
                return;
        }
    }
    var isThere = false;
    for(i = 0; i < word.length; i++){
        if(word.charAt(i) == letter){
            isThere = true;
            for(j = 0; j < word.length; j++){
                if(word.charAt(j) == letter){
                    document.getElementById(j).innerHTML = letter;
                    letterCount++;
                }
            }
        }
    }
    if(isThere == false){
        wrong++;
        document.getElementById(letter).style.color = "red";
        document.getElementById('img').src = 'img/obesenec'+String(wrong)+'.png';
        if(wrong == 11){
            failed();
        }
    }
    else{
        correct++;
        var counter = 0;
        if(letterCount != 1){
            while(counter != letterCount/2){
                correctLetters.push(letter);
                counter++;
            }
        }
        else{
            correctLetters.push(letter);
        }
        document.getElementById(letter).style.color = "green";
        if(correctLetters.length == word.length){
            complete();
        }
    }
    
    tries++;
    clicked.push(letter);
    return;
}

function createCells(word){
    var str = '';
    for(i = 0; i < word.length; i++){
        str += '<td id="'+i+'"> </td>';
    }
    document.getElementById('game').innerHTML = str;
    return;
}