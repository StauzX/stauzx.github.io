$('document').ready(function(event){
    $('.explore-more').click(function(event){
        $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage();
});