// Custom script

$(function(){

  $('.btn-project').on ('click', (function(){
    
      $(this).parent().find('.project-about').slideToggle();
    
      if ($(this).html() == 'More') {
      $(this).text('Less');
      }
      else {
        $(this).text('More');
      }

  }));

});