window.onload = function() {
  var canvas = document.getElementById("canvas");
  // vytvoření grafického kontextu
  var ctx = canvas.getContext("2d");
  // proměnná pro uložení aktivního objektu
  var actObj = {};
  // pole vytvořených objektů
  var objects = [];

  /*
  ** Funkce k nastavení pozadí canvasu
  */
  function setBackground(borderColor, backgroundColor) {
    canvas.style.border = "3px solid " + borderColor;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  /*
  ** Funkce provádí vykreslování canvasu (nastavení pozadí, vykreslení objektů)
  */
  function paint() {
    setBackground("black", "white");
    if (objects.length === 0) return;
    objects.forEach(function(obj) {
      obj.paint(ctx);
    });
  }

  /*
  ** Funkce provádí nastavené animace objektů
  */
  function animate() {
    if (objects.length === 0) return;
    objects.forEach(function(obj) {
      obj.animate(canvas);
    });
    paint();
  }

  /*
  ** Ošetření události kliknutí myši na plochu canvasu
  */

  canvas.addEventListener("click", function(evt) {
    if (objects.length === 0) return;
    setObjects();
    // pokud byla při kliknutí stisknuta klávesa ALT, zobrazí se okno s informací o typu aktivního objektu
    if (evt.ctrlKey) alert(actObj.label + ',' +actObj.type);
  });

  /*
  ** Ošetření události stisknutí tlačítka myši na ploše canvasu
  */

  canvas.addEventListener("mousedown", function(evt) {
    if (objects.length === 0) return;
    setObjects();
    // zjištění rozsahu plochy canvasu
    var rect = canvas.getBoundingClientRect();
    // detekce kliknutí na objekt
    objects.forEach(function(obj) {
      if (obj.bound(evt.clientX - rect.x, evt.clientY - rect.y))
        // nastavení aktivního objektu
        actObj = obj;
    });
    // v případě stisku klávesy SHIFT aktivováno přesunutí vybraného objektu
    if (evt.shiftKey) {
      actObj.drag.enabled = true;
      actObj.drag.dx = evt.clientX - rect.x;
      actObj.drag.dy = evt.clientY - rect.y;
    }
  });

  /*
  ** Ošetření události uvolnění tlačítka myši na ploše canvasu
  */

  canvas.addEventListener("mouseup", function(evt) {
    if (objects.length === 0) return;
    setObjects();
    var rect = canvas.getBoundingClientRect();
    // pokud je některý objekt přesouván, dojde k ukončení této akce
    if (actObj.drag.enabled) {
      actObj.x -= actObj.drag.dx - (evt.clientX - rect.x);
      actObj.y -= actObj.drag.dy - (evt.clientY - rect.y);
      actObj.drag.enabled = false;
    }
    paint();
  });

  /*
  ** Ošetření události pohybu kurzoru myši nad plochou canvasu
  */

  canvas.addEventListener("mousemove", function(evt) {
    if (objects.length === 0) return;
    setObjects();
    paint();
    var rect = canvas.getBoundingClientRect();
    // pokud je některý objekt přesouván, dojde k jeho přesunu na aktuální pozici kurzoru
    if (actObj.drag.enabled) {
      actObj.x -= actObj.drag.dx - (evt.clientX - rect.x);
      actObj.y -= actObj.drag.dy - (evt.clientY - rect.y);
      actObj.drag.dx = evt.clientX - rect.x;
      actObj.drag.dy = evt.clientY - rect.y;
    }
    // zobrazí se titulek pod právě aktivním objektem
    if (actObj) actObj.showLabel(ctx);
  });

  /*
  ** Ošetření události stisku klávesy v dokumentu
  */

  document.addEventListener("keydown", function(evt) {
    if (objects.length === 0) return;    
    switch (evt.code) {
      case "ArrowLeft":
        actObj.move(-actObj.speed, 0, canvas);
        break;
      case "ArrowUp":
        actObj.move(0, -actObj.speed, canvas);
        break;
      case "ArrowRight":
        actObj.move(actObj.speed, 0, canvas);
        break;
      case "ArrowDown":
        actObj.move(0, actObj.speed, canvas);
        break;
      case "PageUp":
        actObj.size(1);
        break;
      case "PageDown":
        actObj.size(-1);
        break;
    }
    paint();
  });

  /*
  ** Funkce nastaví formulářové prvky podle aktuálního stavu objektů
  */  
  function setObjects() {      
    var selectList = document.getElementById("list");
    // provede vyčištění seznamu objektů
    while (selectList.options.length > 0) {
      selectList.remove(0);
    }
    // nastaví seznam objektů podle proměnné objects
    objects.forEach(function(obj, index) {
      var option = document.createElement("option");
      option.text = obj.label;
      selectList.add(option);
      // v případě, že jde o aktivní objekt
      if (obj === actObj) {
        // bude vybraným objektem seznamu  
        selectList.selectedIndex = index;
      }
    });
    // nastavení ostatních formulářových prvků podle stavu aktivního objektu
    document.getElementById("x").value = actObj.x;
    document.getElementById("y").value = actObj.y;
    document.getElementById("caption").value = actObj.label;
    document.getElementById(actObj.type).checked = true;
  }

  /*
  ** Ošetření události kliknutí na tlačítko "Nový"
  */
  
  document.getElementById("new").addEventListener("click", function() {
    // zjištění nastavených souřadnic  
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    // zjištění popisku
    var caption = document.getElementById("caption").value;
    // rozhodnutí o vytvoření objektu podle zvoleného typu
    if (document.getElementById("rectangle").checked) {
      // vložení nového obdélníku do pole objects  
      objects.push(new Rectangle(x, y, 50, 50, "green"));
    }
    if (document.getElementById("circle").checked) {
      // vložení nového kruhu do pole objects  
      objects.push(new Circle(x, y, 50));
    }
    if (document.getElementById("triangle").checked) {
      // vložení nového kruhu do pole objects  
      objects.push(new Triangle(x, y, 50));
    }
    // nastavení aktivního objektu (poslední v seznamu)
    actObj = objects[objects.length - 1];
    // nastavení popisku aktivního objektu
    actObj.label = caption;
    actObj.urlImage = 'img/girl2.png'
    setObjects();
    paint();
  });

  /*
  ** Ošetření události kliknutí na tlačítko "Smazat"
  */

  document.getElementById("delete").addEventListener("click", function() {
    // v seznamu objektů najde aktivní objekt  
    objects.forEach(function(obj, index) {
      if (obj === actObj) {
        // odstraní objekt z pole  
        objects.splice(index, 1);
      }
    });
    // obsahuje-li po smazání seznam ještě nějaké objekty
    if (objects.length > 0) {
      // je nastaven jako aktivní poslední objekt v seznamu   
      actObj = objects[objects.length - 1];
    }
    setObjects();
    paint();
  });
 
  // spuštění animace
  window.setInterval(animate, 40);
  paint(ctx);
};
