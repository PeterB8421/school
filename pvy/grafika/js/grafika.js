var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// Začátek cesty
ctx.beginPath();
// Nastavení tloušťky pera
ctx.lineWidth = 3;
// Vzor čáry [délka, mezera, délka, mezera, ...]
ctx.setLineDash([10,15,52,15]);
ctx.rect(250,10,200,200);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.strokeStyle = "red";
ctx.fillRect(260,20,180,180);
ctx.closePath();

ctx.setLineDash([]);
ctx.beginPath();
ctx.ellipse(630,90,130,80,0*Math.PI/180,0,2*Math.PI,true);
ctx.stroke();
var grd=ctx.createLinearGradient(500,10,760,10);
grd.addColorStop(0,"green");
grd.addColorStop(0.5,"blue");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fill();
ctx.closePath();
