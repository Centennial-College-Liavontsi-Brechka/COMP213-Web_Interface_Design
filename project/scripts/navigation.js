jQuery(document).ready(function($) {
	var h_hght = parseInt($('#navigation').css('top')); 
	var h_mrg = 0;	
	$(function(){
		$(window).scroll(function(){
			var top = $(this).scrollTop();
			var elem = $('#navigation');
			
			if (top+h_mrg < h_hght) {
				elem.css('top', (h_hght-top));
			} else {
				elem.css('top', h_mrg);
			}
		});	
	});
});