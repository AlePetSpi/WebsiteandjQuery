$("h1 span").hover(function(){
    $(this).animate({fontSize: "150%"}, 250)
 }, function() {
   $(this).animate({fontSize: "100%"}, 250)  
})