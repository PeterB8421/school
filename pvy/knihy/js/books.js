function listBooks(data){
    var result = '';
    data.forEach(function(obj){
        result += '<h3>'+ obj.zanr +'</h3>';
        var knihy = '';
        obj.knihy.forEach(function(kniha){
            knihy += '<article class="row">';
            knihy += '<div class="col-md-2">';
            knihy += '<figure><img src="img/'+ kniha.obalka +'" alt="'+ kniha.titul +'" class="img-responsive"></figure>';
            knihy += '</div>';
            knihy += '<div class="col-md-10">';
            knihy += '<p>'+ kniha.autor +'</p>';
            knihy += '<h4>'+ kniha.titul +'</h4>';
            knihy += '<p>Vydáno: '+ kniha.vydani +'</p>';
            knihy += '<p>Počet stran: '+ kniha.stran +'</p>';
            knihy += '<p>Cena: '+ kniha.cena +' Kč</p>';
            knihy += '<p class="obsah">'+ kniha.obsah +' Kč</p>';
            knihy += '</div>';
            knihy += '</article>';
        });
        result += '<div class="knihy">' + knihy + '</div>';
    });

    return result;
}

$(function(){
    $("#nabidka").html(listBooks(data));
    $("#nabidka").accordion({
        collapsible: true,
        heightStyle: "content"
    });
});