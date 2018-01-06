/* Objekt Kruh
** x, y - souřadnice středu
** radius - poloměr
*/
function Triangle(x, y, side) {
  this.x = x;
  this.y = y;
  this.type = "triangle";         // typ objektu
  this.label = "Label";         // popisek
  this.side = side;
  this.drag = {                 // vlastnosti přesouvaného objektu
    dx: 0,                      // relativní posun souřadnice x
    dy: 0,                      // relativní posun souřadnice y
    enabled: false              // přesunutí povoleno
  };
  this.speed = 3;               // rychlost pohybu objektu
  this.fillStyle = "red";      // barva výplně
  this.strokeStyle = "blue";   // barva obrysu
  this.lineWidth = 3;           // tloušťka obrysu
  this.lineDash = [];           // vzor obrysové čáry
  this.image = null;            // obrázek výplně
  this.urlImage = null;         // cesta k obrázku výplně

  /* Metoda detekující kurzor v oblasti objektu; 
  ** cx, cy - souřadnice kurzoru
  ** return boolean - true (kurzor) 
  */
  this.bound = function(cx, cy) {
    // absolutní vzdálenost kurzoru vůči středu kruhu  
    var height = Math.sqrt(Math.pow(this.side, 2) - Math.pow(this.side/2, 2));
    // je-li vzdálenost menší nebo rovna poloměru = true
    return (cx < this.x && cx > this.x - height) && (cy < this.y && cy > this.y - height);
  };

  /* Metoda vykreslující objekt; 
  ** ctx - grafický kontext
  */  
  this.paint = function(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.setLineDash(this.lineDash);
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.side, this.y);
    var height = Math.sqrt(Math.pow(this.side, 2) - Math.pow(this.side/2, 2));
    ctx.lineTo(this.x - this.side/2, this.y - height);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.clip();
    // Jestliže je vytvořen obrázek, bude vykreslen v objektu
    ctx.restore();
  };

  /* Metoda zobrazující popisek pod objektem; 
  ** ctx - grafický kontext
  */   
  this.showLabel = function(ctx) {
    ctx.font = "16px sans";
    var wLabel = Math.ceil(ctx.measureText(this.label).width / 2 + 5);
    ctx.fillStyle = "#ccc";
    ctx.fillRect(this.x - wLabel, this.y + this.side, wLabel * 2, 20);
    ctx.fillStyle = "#333";
    ctx.fillText(this.label, this.x - wLabel + 5, this.y + this.side + 16);
  };

  /* Metoda zajišťuje pohyb objektu v rámci canvasu; 
  ** dx, dy - posun v ose x a y
  ** canvas - odkaz na objekt plátna
  */   
  this.move = function(dx, dy, canvas) {
    this.x += dx;
    if (this.x >= canvas.width - this.side)
      this.x = canvas.width - this.side;
    if (this.x <= this.side) this.x = this.side;
    this.y += dy;
    if (this.y >= canvas.height - this.side)
      this.y = canvas.height - this.side;
    if (this.y <= this.side) this.y = this.side;
  };

  /* Metoda mění velikost objektu; 
  ** dsize - hodnota kladná, nebo záporná
  */   
  this.size = function(dsize) {
    this.side += dsize;
    if(this.side < 10){
      this.side = 10;  
    }
    if(this.side > 100){
      this.side = 100;
    }
  };

  /* Metoda provádí animaci objektu; 
  ** canvas - odkaz na objekt plátna
  */   
  this.animate = function(canvas) {
    if (this.y <= canvas.height - this.side && this.y >= 0)
      this.y += 0.2;
  };
}
