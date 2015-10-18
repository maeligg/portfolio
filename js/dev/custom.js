// Custom script

$(function(){

  $('.more').on ('click', (function(e){

      e.preventDefault();
      $(this).next().slideToggle();

      $("i",this).toggleClass("fa-plus fa-minus");

  }));

});