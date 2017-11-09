var sPressed = false;
var oPressed = false;
$(document).ready(function () {
    $("#obsahy").hide();
    $("#sSquare").hide();
    $("#sRectangle").hide();
    $("#sCube").hide();
    $(".obsah").click(function (e) { 
        e.preventDefault();
        $("#obsahy").toggle(100);
    });
    $(".sCtverec").click(function (e) { 
        e.preventDefault();
        $("#sSquare").toggle(100);
    });
    $(".sObdelnik").click(function (e) { 
        e.preventDefault();
        $("#sRectangle").toggle(100);
    });
    $(".sKrychle").click(function (e) { 
        e.preventDefault();
        $("#sCube").toggle(100);
    });
    $(".objem").click(function(e){
        e.preventDefault();
        $("#objemy").toggle(100);
    })
});