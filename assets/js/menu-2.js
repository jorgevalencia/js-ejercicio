$(document).ready(function(){

   // Resaltar <li> clickeado
   $('#menu-container a').click(function(e) {
       $('#menu-container li').removeClass('current-menu-item');
       $(this).parent().addClass('current-menu-item');
   });

   //Desplegear submenu
   $('#menu-container li').hover(function(e) {
      $(this).find('.sub-menu').fadeToggle();
   });

   // Abrir menu mobile
   $('#mobile-button').click(function(e) {
      $('#menu-container').show();
      $(this).hide();
      $('#mobile-close').show();
   })

   // Cerrar menu mobile
   $('#mobile-close').click(function(e) {
      $('#menu-container').hide();
      $(this).hide();
      $('#mobile-button').show();
   })

   // // menu mobile  - Desplegear submenu
   // if ($(window).width() < 990) {
   //    $('#menu-container li').click(function(e) {
   //       $(this).find('.sub-menu').fadeToggle();
   //       $(this).siblings().find('.sub-menu:visible').hide();
   //    });
   // // menu desktop - Desplegear submenu
   // } else {
   //    $('#menu-container li').hover(function(e) {
   //       $(this).find('.sub-menu').fadeToggle();
   //    });
   // }


});
