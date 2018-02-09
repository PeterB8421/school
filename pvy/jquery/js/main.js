function findJSONObject(data, attrib, value){
    var result;
    data.forEach(function(val, index){
        if(val[attrib] == value){
            result = val;
        }
    })
    return result;
}

$(function(){
    $("#tick").hide();
    var obj = null;
    var colors = ["darkred","darkblue","white"];
    var chosenColor = colors[Math.floor(Math.random()*colors.length)];
    $(".row:first figcaption").hide();
    $(".row:first figure").on('mouseover', function(){
        $(this).find("figcaption").toggle(100);
    })
    $("#tick").css({'position':'absolute'});
    $("header.jumbotron").css({"background-color":chosenColor, "color":"#888"});
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
    $('figure').on('click', function (event) {
        if(event.ctrlKey){
            var prezident = $(this).find('figcaption').text();
            var person = findJSONObject(data, "name", prezident);
            if(person != undefined){
                $("#window").modal('show');
                $("h4.modal-title").text(person.name +' ('+ person.inoffice + ')');
                $(".modal-body").html('<img src="fotky/'+ person.photo +'"><br>');
                $(".modal-body").append('<b>Narozen</b>: '+ person.borned +'<br>');
                if(person.died.length > 0){
                    $(".modal-body").append('<b>Zemřel</b>: '+ person.died +'<br>');
                }
                $(".modal-body").append('<b>Popis</b>: '+ person.description +'<br>');
                $(".modal-body").append("<hr><a href='"+ person.link +"' class='btn btn-primary' target='_blank'>Podrobnosti</a>")
                $(".modal-header").css({"background-color":"#00a","color":"white"});
                $(".modal-header").css("text-align","center");
            }
        }
        if(event.shiftKey){
            if(obj == null){
                obj = $(this);
            }
            else{
                var store = $(this).html();
                $(this).html(obj.html());
                $(obj).html(store);
                obj = null;
            }
        }
      })
});
var element;
$("body").on("mouseenter","img", function(event){
    var pos = $(this).offset();
    element = $(this);
    $("#tick").css({'top':pos.top,'left':pos.left}).show().on('click', function(){
        element.parent().parent().remove();
        $(this).hide();
    });
})