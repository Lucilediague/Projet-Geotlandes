$(document).ready(function() {

$('.geometre').on('mouseover', function() {     
$(this).css({'background-color':'#14862f','opacity':'1'});
$(this).closest('.geometre').find('.description').fadeToggle();
  });
});

