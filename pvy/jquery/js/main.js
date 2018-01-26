$(function(){
    var obj = null;
    $(".row:first figcaption").hide();
    $(".row:first figure").on('mouseover', function(){
        $(this).find("figcaption").toggle(100);
    })
    $("header.jumbotron").css({"background-color":"#003366", "color":"white"});
    $("h2:contains('1948 - 1989')").append(" <i>(Komunisti)</i>");
    $(".well").on('click', function(){
        $(this).nextAll().toggle(500);
    })
    $("figure").on('mouseover', function(){
        $(this).css({"background-color":"yellow"});
    })
    $("figure").on('mouseleave', function(){
        $(this).css({"background-color":"white"});
    })
    $(document).keydown(function(){
        if(event.key == " "){
            $("body").css({"background-color":"yellow"});
        }
    })
    $(document).keyup(function(){
        if(event.key == " "){
            $("body").css({"background-color":"white"});
        }
    })
    $(".row:nth-child(2) figure").on('click', function(){
        if(obj == null){
            obj = $(this);
        }
        else{
            var store = $(this).html();
            $(this).html(obj.html());
            $(obj).html(store);
            obj = null;
        }
    })
    $('figure').on('click', function () {
        $("#window").modal('show');
        $("h4.modal-title").text($(this).find('figcaption').text());
        $(".modal-header").css({"background-color":"#00a","color":"white"});
        $(".modal-header").css("text-align","center");
      })
});