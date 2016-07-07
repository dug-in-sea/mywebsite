$('div.letter').mouseover(function(event) {
	/* Act on the event */

	$(this).stop().children('span').each(function(index){
		event.stopPropagation();
		$(this).animate({"opacity": 0.1},200)
			   .delay(100*index)
			   .animate({"opacity":1},200);
		``
});
});