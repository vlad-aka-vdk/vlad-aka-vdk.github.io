$(document).ready(function(){

    

	/* Планвая прокрутка к якорю */
    $(".js-models-nav-item").on("click", function(e){
        var anchor = $(this).attr('href');
             
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - $(".header__menu").height() 
            /* - $(".header__menu").height() Прокручивает на n пикселей меньше, равное высоте меню */
        }, 777);
        e.preventDefault();
        return false;
    })

    /* Изменение цвета меню после прокрутки */
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".header__menu");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });


  
   

    
});
   
