$(".menu ul li").click(function(){
    $(this).find("dl").slideToggle(200).parent().siblings().find("dl").slideUp(200);
    $(this).find("span i").toggleClass('action').parents().siblings().find("span i").removeClass('action');
})
