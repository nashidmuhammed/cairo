

AOS.init({
    duration: 1200,
  })

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("bl_color", window.scrollY > 0);
    nav.classList.toggle("shadow-sm", window.scrollY > 0);
    
})


function isScrolledIntoView(elm) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elmTop = $(elm).offset().top;
    var elmBottom = elmTop + $(elm).height();

    return ((elmBottom <= docViewBottom) && (elmTop >= docViewTop));
}

$(window).scroll(function(){
    if (isScrolledIntoView('#home') === true) {        
        $('.navbar-light li').removeClass('active')
        $('.navbar-light .navbar-nav .home').addClass('active')
    }
    if (isScrolledIntoView('#about') === true) {        
        $('.navbar-light li').removeClass('active')
        $('.navbar-light .navbar-nav .about').addClass('active')
    }
    if (isScrolledIntoView('#service') === true) {        
        $('.navbar-light li').removeClass('active')
        $('.navbar-light .navbar-nav .service').addClass('active')
    }
    if (isScrolledIntoView('#contact') === true) {        
        $('.navbar-light li').removeClass('active')
        $('.navbar-light .navbar-nav .contact').addClass('active')
    }
    if (isScrolledIntoView('#work') === true) {        
        $('.navbar-light li').removeClass('active')
        $('.navbar-light .navbar-nav .work').addClass('active')
    }
    
});