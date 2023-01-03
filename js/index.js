
$(window).scroll(function(){
    
if($(window).scrollTop()>100)
    {
        $(".bg-mine").css("backgroundColor","#212529");
    }
else{
            $(".bg-mine").css("backgroundColor","transparent");

    
}
   
});




$("a").click(function(){
    
    var aHref=$(this).attr("href");
    $("body").animate({scrollTop:$(aHref).offset().top},1000)
})




