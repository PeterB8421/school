function clearCanvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    canvas.style.border = "2px solid black";
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var objects = [];
clearCanvas();
objects.push(new Rectangle(100,100,50,50,"yellow"));
objects.push(new Rectangle(100,200,250,50,"blue"));
objects.push(new Rectangle(300,100,50,50,"yellow"));

function paint(){
    clearCanvas();
    objects.forEach(function(obj){
        obj.paint(ctx);
    });
}
function animate(){
    objects.forEach(function(obj){
        obj.animate(canvas);
    });
    paint();
}
document.addEventListener('keydown', function(event){
    console.log(event.code);
    var index = 0;
    var obj = objects[index];
    switch(event.code){
        case 'ArrowUp':
         console.log('nahoru');
         obj.y -= 10;
         break;
        case 'ArrowDown':
         console.log('dolů');
         obj.y += 10;
         break;
        case 'ArrowLeft':
         console.log('Doleva');
         obj.x -= 10;
         break;
        case 'ArrowRight':
         console.log('doprava');
         obj.x += 10;
         break;
    }
    paint();
})
//setInterval(animate,40);
