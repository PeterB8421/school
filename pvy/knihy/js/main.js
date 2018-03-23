function listBooks(data) {
  var result = "";
  data.forEach(function(obj) {
    result += "<h3>" + obj.zanr + "</h3>";
    var knihy = "";
    obj.knihy.forEach(function(kniha) {
      knihy += '<article class="row" id="' + kniha.id + '">';
      knihy += '<div class="col-md-2">';
      knihy +=
        '<figure><img src="img/' +
        kniha.obalka +
        '" alt="' +
        kniha.titul +
        '" class="img-responsive"></figure>';
      knihy += '<button class="detail">Detail</button>';
      knihy += '</div>';
      knihy += '<div class="col-md-10">';
      knihy += '<p>' + kniha.autor + '</p>';
      knihy += '<h4>' + kniha.titul + '</h4>';
      knihy += '<p>Počet stran: ' + kniha.stran + '</p>';
      knihy += '<p>Cena: <b class="cena">' + kniha.cena + '</b> Kč</p>';
      knihy += '<p class="obsah">' + kniha.obsah + '</p>';
      knihy += '</div>';
      knihy += '</article>';
    });
    result += '<div class="knihy">' + knihy + "</div>";
  });
  return result;
}

$(function() {
  $("#nabidka").html(listBooks(data));
  $("button.detail").on('click',function(){
    $( "#dialog " ).html($(this).parents("article").find(".obsah").text());  
    $( "#dialog" ).dialog({
        title: $(this).parents("article").find("h4").text(),
    });
  });

  $("#nabidka").accordion({
    collapsible: true,
    heightStyle: "content"
  });

  $("#objednavka").tabs();

  $("article").draggable({
    cancel: "a.ui-icon", // clicking an icon won't initiate dragging
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    helper: "clone",
    cursor: "move"      
  });

  $("#zbozi").droppable({
      accept: "article",
      classes: {
        "ui-droppable-active": "custom-state-active"
      },
      drop: function( event, ui ) {
        $("#zbozi").append(
            ui.draggable
            .clone()
            .on("dblclick", function(){
                $(this).css({"opacity":"0.5"});
                $(this).remove();
          }));
      }
  });
  
  $( "#zbozi" ).sortable({
    helper: 'clone'
  });
  //$( "#zbozi" ).disableSelection();
  $.datepicker.regional['cs'] = { 
    closeText: 'Cerrar', 
    prevText: 'Předchozí', 
    nextText: 'Další', 
    currentText: 'Hoy', 
    monthNames: ['Leden','Únor','Březen','Duben','Květen','Červen', 'Červenec','Srpen','Září','Říjen','Listopad','Prosinec'],
    monthNamesShort: ['Le','Ún','Bř','Du','Kv','Čn', 'Čc','Sr','Zá','Ří','Li','Pr'], 
    dayNames: ['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'], 
    dayNamesShort: ['Ne','Po','Út','St','Čt','Pá','So',], 
    dayNamesMin: ['Ne','Po','Út','St','Čt','Pá','So'], 
    weekHeader: 'Sm', 
    dateFormat: 'dd.mm.yy', 
    firstDay: 1, 
    isRTL: false, 
    showMonthAfterYear: false, 
    yearSuffix: ''}; 
    $.datepicker.setDefaults($.datepicker.regional['cs']);
  $( "#date" ).datepicker();
  $( "[name=sex]" ).checkboxradio({
    icon: false
  });
  var cities = [
    "Opava",
    "Velké Hoštice",
    "Háj ve Slezsku",
    "Kobeřice",
    "Stěbořice",
    "Hradec nad Moravicí",
    "Bolatice",
    "Odry",
    "Dolní Životice",
    "Litultovice",
    "Ostrava",
    "Praha",
    "Brno",
    "Otice",
    "Horní Benešov",
    "Olomouc",
    "Kojetín",
    "Plzeň",
  ];
  $( "#city" ).autocomplete({
    source: cities.sort()
  });
  $("#summary").on('click',function(){
    var zakaznik = {
      jmeno: $("#name").val(),
      narozeni: $("#date").val(),
      pohlavi: $("#sex").val(),
      ulice: $("#street").val(),
      mesto: $("#city").val(),
    };
    var knihy = [];
    $("#zbozi").children("article").each(function(key,obj){
      var kniha = {
        titul: $(obj).find("h4").text(),
        cena: $(obj).find(".cena").text()
      }
      knihy.push(kniha);
    })
    var objednavka = {
      zakaznik: zakaznik,
      knihy: knihy
    }
    console.log(objednavka);
  })
});
