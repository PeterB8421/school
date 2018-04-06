function makeTable(data){
    var result = '';
    data.forEach(function(row){
        result += "<tr>";
        result += "<td>"+row.datum+"</td>";
        result += "<td>"+row.nazev+"</td>";
        result += "<td>"+row.misto+"</td>";
        result += "<td>"+row.cena+"</td>";
        result += "<td>"+row.slogan+"</td>";
        result += "</tr>";
    })
    return result;
}


$(function(){
    var defaultColordt = $("dt").css("background-color");
    var defaultColordd = $("dd").css("color");
    $("dt").on('mouseenter',function(){
        $("dt").css({'background-color':defaultColordt,'border':'none'});
        $("dd").css({'color':defaultColordd});
        $(this).css({'background-color':'brown','border':'solid 2px gray'});
        $(this).next().css({'color':'brown'});
    })
    $("#pamatka").css({'position':'absolute'}).hide();
    $("circle").on('mouseover',function(event){
        $("#pamatka > img").attr("src",$(this).attr("img"));
        $("#pamatka").css({'left':event.pageX,'top':event.pageY});
        $("#pamatka").show();
    })
    $("svg").on('mouseleave',function(event){
        $("#pamatka").hide();
    })
    $("h3.panel-title").prepend('<span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span> ');
    $("div.panel-body > p").hide();
    $("#modal").hide();
    $("figure").on('dblclick',function(clicked){
        $("#modal").modal('toggle');
        $(".modal-title").text($(this).find("figcaption").text());
        $(".modal-body").html($(this).next().text());
    })
    $("#tab-akce tbody").html(makeTable(akce));
})