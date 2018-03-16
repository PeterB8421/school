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
      knihy += '<p>Cena: ' + kniha.cena + ' Kč</p>';
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

});
