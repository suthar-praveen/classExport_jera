$(function() {

    // Sidebar Toggler
    $('#sidebar-toggle').on('click', function () {
        $('body').toggleClass('sm-sidebar');
    });

    $('.uk-nav').find('li:has(ul)').click(function(){
        $(this).toggleClass('active');
        $(this).children('.dropdown-list').slideToggle();
    });

    // Sidebar-new child menu
    $('.submenu a').on('click', function(){
        $(this).parent().toggleClass("active");
        $('.submenu-list').fadeToggle();
      });
      $('.submenu-list').find('.submenu-item').click(function(){
        $(this).children('.submenu-list-item').slideToggle();
        $(this).find('.submenu-item').toggleClass("active");
    });
});

const demo = document.querySelector('.scroll');
