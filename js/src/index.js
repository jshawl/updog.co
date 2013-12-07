;(function(){
    $(function(){
	var lastScrollTop = 0;
	$(window).bind('scroll', function(event){
	    console.log($(this).scrollTop());
	    var st = $(this).scrollTop();
	    if (st % 20 == 0){
		if (st > lastScrollTop && st > 10){
		    $('header').addClass('hidden');
		} else {
		    $('header').removeClass('hidden');
		    lastScrollTop = st;
		}
	});
    });
})(jQuery);
