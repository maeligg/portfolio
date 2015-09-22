// Custom script

$(function(){

  $('.more').on ('click', (function(event){

      event.preventDefault();
      $(this).next().slideToggle();

      $("i",this).toggleClass("fa-plus fa-minus");

  }));

});