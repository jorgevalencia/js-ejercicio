//Funcionalidad menu desktop
function desktop(){
   //Limpiar lo que traiga de mobile
   $('#mobile-button').hide()
   $('#mobile-close').hide()
   $('.menu-container li .sub-menu').hide()
   $(".menu-container li").unbind('click')
   //Funcionalidad del menu
   $('.menu-container li').hover(function() {
      $(this).find('.sub-menu').fadeToggle();

   });
}

//Funcionalidad menu mobile
function mobile(){
   //Limpiar lo que traiga de destop
   $('#mobile-button').show()
   $(".menu-container li").unbind('mouseenter mouseleave')
   //Funcionalidad del menu
   $('.menu-container li').click(function() {
      $(this).siblings().find('.sub-menu:visible').hide()
      $(this).find('.sub-menu').fadeToggle()

   });
}

//Funcionalidad responsive
function updateContainer() {
   var width = $(window).width();
   if ( width > 990) {
      //Si es más grandeo que 990px llamar function desktop
      desktop()
   } else {
      //De lo contrario llamar function mobile
      mobile()
   }
}

$(window).resize(function() {
   //Cada que se haga rezise llamar funcion responsive
   updateContainer();
});

$(document).ready(function(){

   //Llamar función de responsive
   updateContainer();

   // Resaltar <li> clickeado
   $('#menu-container a').click(function(e) {
       $('#menu-container li').removeClass('current-menu-item');
       $(this).parent().addClass('current-menu-item');
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

});
