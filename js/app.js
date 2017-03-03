$(document).ready(function(){
	$('#menu__icon').click(function(event){
		event.preventDefault();
		$('body').toggleClass('with--sidebar');

	});

})(jQuery);

