// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

;(function(){
	$(function(){
	var lastScrollTop = 0;
	$(window).bind('scroll', function(event){
	   var st = $(this).scrollTop();
	   console.log(st);
	   if (st > lastScrollTop && st > 50){
	       console.log('here');
	       $('header').addClass('hidden');
	   } else {
	      console.log('maybe here');
	      $('header').removeClass('hidden');
	   }
	   lastScrollTop = st;
	});

	});
})(jQuery);
