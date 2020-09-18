$(".maintext").css({
"color": "#0769AA "
});

$("#mainheader").css({
"margin-bottom": "20px"
});

$("#footer").find("p").css({
"font-weight": "bold"
});
$("body").css({
"margin-left": "20px"
});

$("#mainheader").click(function(){
    $(this).css({
        "border": "2px solid blue"
    })

    $(".maintext").css({
        "font-size": "20px"
    })

    $("#footer").find("p").text("Doppelklick verkleinert wieder.")
});

$("#mainheader").dblclick(function(){

    $(".maintext").css({
        "font-size": "15px"
    })

    $("#footer").find("p").text("Klicke auf das Logo.")
})