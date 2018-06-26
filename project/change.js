$(document).ready(function (){
    if (localStorage.getItem("background") == undefined) {
        localStorage.setItem("background","0");
        $("body").css("background-color","lightgoldenrodyellow");
    } 
    else
    {
        if (localStorage.getItem("background") === "0") {
            $("body").css("background-color","lightgoldenrodyellow");
        }
        else {
            $("body").css("background-color","lightblue");
        }
    }
    
    $('#change').click(function () {
        if ($("body").css( "background-color" ) === "rgb(250, 250, 210)")
        {
            $("body").css("background-color","lightblue");
            localStorage.setItem("background","1");
            return;
        }
        $("body").css("background-color","lightgoldenrodyellow");
        localStorage.setItem("background","0");
    });
});