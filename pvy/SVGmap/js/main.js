function findJSONObject(data, attr, value) {
  var obj;
  /* Prochází všechny prvky pole datového objektu typu JSON */
  data.forEach(function (element) {
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
  var temp = '';
  /* Cyklus prochází každý atribut vypisovaného objektu a zjišťuje jeho klíč */
  for (var key in obj) {
    /* Jestliže pro daný klíč existuje hodnota... */
    if (obj.hasOwnProperty(key)) {
      if (key == "nazev")
        continue;
      if (key == "vlajka") {
        result += '<img alt="' + obj.nazev + '" src="' + obj.vlajka + '">';
        continue;
      }
      if (key == "hlMesto") {
        result += "<li>Hlavní město: <b>" + obj[key] + "</b></li>";
      }
      else {
        /* ...výsledný seznam se rozšíří o označení klíče a hodnotu, na kterou v objektu klíč ukazuje */
        result += "<li>" +key+ ": <b>" + obj[key] + "</b></li>";
      }
    }
  }
  result += "</ul>";
  return result;
}
var active;
$(function () {
  $("path").on("click", function () {
    $("path").css({ "fill": "#c0c0c0" });
    active = $(this);
    $(active).css({ "fill": "red" });
    var obj = findJSONObject(data, "Zkratka", $(active).attr("id").split("-")[0]);
    if (obj !== undefined) {
      document.getElementById('country-data').innerHTML = "";
      document.getElementById('country-data').innerHTML += "<h2>Data o státu " + obj.nazev + "</h2>";
      document.getElementById('country-data').innerHTML += listOfDetails(obj);
    }
    else {
      document.getElementById('country-data').innerHTML = "<h2>Data o státu nenalezena!</h2>";
    }
  })
  $("path").on("mouseenter", function () {
    var obj = findJSONObject(data, "Zkratka", $(this).attr("id").split("-")[0]);
    var rect = $(this)[0].getBBox();
    $("path").css({ "fill": "#c0c0c0", "stroke": "white", "stroke-width": "0.5" });
    if (obj !== undefined) {

      $("image").attr("x", rect.x);
      $("image").attr("y", rect.y);
      $("image").attr("width", rect.width);
      $("image").attr("height", rect.height);
      $("image").attr("xlink:href", obj.vlajka);
      $("image").css({ "transform": "translate(" + rect.x + "," + rect.y + ")" });
      $(this).css({ "fill": "orange", "stroke": "black", "stroke-width": "2" });
      //$(this).css({"fill":"url(#back)"});
    }
    $(this).parent().append($(this));
    $(active).css({ "fill": "red", "stroke": "black", "stroke-width": "2" });
  })
})