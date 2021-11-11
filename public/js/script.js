$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var vapeColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.center-column img[data-image = ' + vapeColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
