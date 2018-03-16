function listBooks(data) {
  var result = "";
  
  data.forEach(function(obj) {
    result += '<div class="accordion">';
    result += "<h3>" + obj.zanr + "</h3>";
    var knihy = "";
    result += '<div id="selectable">';
    obj.knihy.forEach(function(kniha) {
      knihy += '<article class="row">';
      knihy +=
        '<figure class="col-md-6"><img src="img/' +
        kniha.obalka +
        '" alt="' +
        kniha.titul +
        '" class="img-responsive"></figure>';
      knihy += '<div class="col-md-6">';
      knihy += "<h4><strong>" + kniha.titul + "</strong></h4>";
      knihy += "<p>Autor: " + kniha.autor + "</p>";
      knihy += "<p>Vydáno: " + kniha.vydani + "</p>";
      knihy += "<p>Počet stran: " + kniha.stran + " stran</p>";
      knihy += "<p>Cena: " + kniha.cena + "</p>";
      knihy += "</div>";
      knihy += "</article>";
    });
    result += knihy;
    result += "</div>";
    result += "</div>";
  });

  return result;
}

$(function() {
  $("#nabidka").html(listBooks(data));
  $(function() {
    $(".accordion").accordion({
        collapsible: true,
        heighStyle: "content"
    });
  });
  $(function() {
    $("#selectable").selectable();
  });
});
