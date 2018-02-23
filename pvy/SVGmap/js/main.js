function findJSONObject(data, attr, value) {
    var obj;
    /* Prochází všechny prvky pole datového objektu typu JSON */
    data.forEach(function(element) {
      /* Když zjistí, že požadovaný atribut aktuálního prvku má požadovanou hodnotu... */  
      if (element[attr] === value) {
        /* ...uloží do proměnné obj celý datový prvek (objekt)*/  
        obj = element;
      }
    });
    return obj;
  }
  
  function listOfDetails(obj) {
    var result = "<ul>";
    /* Cyklus prochází každý atribut vypisovaného objektu a zjišťuje jeho klíč */
    for (var key in obj) {
      /* Jestliže pro daný klíč existuje hodnota... */  
      if (obj.hasOwnProperty(key)) {
        /* ...výsledný seznam se rozšíří o označení klíče a hodnotu, na kterou v objektu klíč ukazuje */  
        result += "<li>" + key + ": <b>" + obj[key] + "</b></li>";
      }
    }
    result += "</ul>";
    return result;
  }
var active;
  $(function(){
      $("path").on("click", function(){
        $("path").css({"fill":"#c0c0c0"});
        active = $(this);
        $(active).css({"fill":"red"});
        var obj = findJSONObject(data,"zkratka",$(active).attr("id").split("-")[0]);
        if(obj !== undefined){
            document.getElementById('country-data').innerHTML = "";
            document.getElementById('country-data').innerHTML += "<h2>Data o státu "+obj.nazev+"</h2>";
            document.getElementById('country-data').innerHTML += listOfDetails(obj);
        }
        else{
            document.getElementById('country-data').innerHTML = "<h2>Data o státu nenalezena!</h2>";
        }
      })
      $("path").on("mouseenter", function(){
        $("path").css({"fill":"#c0c0c0","stroke":"white","stroke-width":"0.5"});
        $(this).css({"fill":"yellow","stroke":"gray","stroke-width":"2"})
        $(this).parent().append($(this));
        $(active).css({"fill":"red","stroke":"black","stroke-width":"2"});
      })
  })