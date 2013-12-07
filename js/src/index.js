;(function(){
    $(function(){
	var lastScrollTop = 0;
	$(window).bind('scroll', function(event){
	    var st = $(this).scrollTop();
	    if (st > lastScrollTop && st > 10){
		$('header').addClass('hidden');
	    } else {
		$('header').removeClass('hidden');
	    }
	    lastScrollTop = st;
	});
    });
})(jQuery);
