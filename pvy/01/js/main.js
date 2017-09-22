console.log('Script loaded!');
console.log(document.getElementById("zahlavi"));
document.getElementsByTagName('img')[0].width /= 2;
//
document.getElementById('nadpis').addEventListener('click', function(){
    this.innerText = prompt('Napište něco: ');
    this.style.color = 'red';
});
document.getElementsByTagName('img')[0].addEventListener('mouseenter', function(){
    this.src = 'img/irma2.jpg';
    this.style.border = 'solid 2px red';
    this.style.opacity = 0.75;
});
document.getElementsByTagName('img')[0].addEventListener('mouseleave', function(){
    this.src = 'img/irma1.jpg';
    this.style.border = 'none';
    this.style.opacity = 1;
});
document.getElementById('menic').addEventListener('click', function(){
    document.getElementsByTagName('main')[0].style.backgroundColor = randGenRGB();
});