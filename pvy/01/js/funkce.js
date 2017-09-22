function randGenRGB(){
    var rgb = '';
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    rgb = 'rgb('+r+','+g+','+b+')';
    console.log('rgb('+r+','+g+','+b+')')
    return rgb;
}
randGenRGB();