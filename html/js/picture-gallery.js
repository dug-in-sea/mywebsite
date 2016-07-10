$(document).ready(function(){
	var $hoverItems = $('.hover-opacity');
	var  $addDiv = $("<div></div>"); 
	$hoverItems.hover(
		function(event){
			$(this).css('opacity','0.4');
		},
		function(){
			$(this).css('opacity','1');
		}
	);
});

$(document).ready(function(){
	var $hoverItems = $('.hover-opacity');
	
	function arrangeWH(){
		var currentH = $hoverItems.innerHeight();
		var currentW = $hoverItems.innerWidth();
		var $hoverImages = $('.hover-opacity img');
		$hoverImages.each(function(){
			$(this).css("width","100%");
			});
	}

	arrangeWH();
	 $(window).resize(
		arrangeWH()
		);
		
		
	
});

$('#footer button').click(
	function(){
	   $('html').animate(
	   	{"scrollTop" : 0}, 200,"linear"
	   	);
	}
	);
