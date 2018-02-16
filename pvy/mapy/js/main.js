function findJSONObject(data, attr, value) {
    var obj;
    data.forEach(function(element){
        if (element[attr] === value) {
            obj = element;
        }
    })
    return obj;
}

function listOfDetails(obj){
    var result = '<ul>';
    for (var key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            result += '<li>'+ key + ": <b>" + obj[key] + '</b></li>';    
        }
    }    
    result += '</ul>';
    if(obj.foto != undefined){
        result += '<img src="'+obj.foto+'" alt=""Město class="img-responsive">';
    }
    return result;
}


$(function(){
    $('#city').css({'position':'absolute'});

    $("path").on('click',function(){
       $("path").attr('fill','#ccc');
       $(this).attr('fill','red');
       var obj = findJSONObject(data, 'zkratka', $(this).attr('id').substr(3,2));
       if (obj !== undefined)  {
           $('#region h2').text('Kraj: ' + obj.region);
           $('#region #detail').html(listOfDetails(obj));
       }
    });

    $("path").on('mouseenter',function(event){
        $("path").attr('fill','#ccc');
        $(this).attr('fill','yellow');
        var obj = findJSONObject(data, 'zkratka', $(this).attr('id').substr(3,2));
        if (obj !== undefined)  {
            $('#city').animate({'top': event.pageY, 'left': event.pageX}).text(obj.region);
        }
     });
     
});