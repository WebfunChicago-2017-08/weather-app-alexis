$("button").click(function(){
    var key = '&APPID=4dbbc7d10ab29006f6edf83a297c3386';
    var city = $("input[type='text']").val();
    var message = "<h2>";
    console.log(city);

    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+key, function(res) {
        console.log(res);
        message += res.name +" - "+res.sys['country']+ " - "+res.main['temp'] +" &#x2109;</h2>";

        $('#showroom').html(message);
    }, "json");

    return false;
})