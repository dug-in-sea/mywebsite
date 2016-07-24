// 当鼠标悬停在字母logo,其将会发生闪烁 
$('div.letter').mouseenter(function(event) {

	$(this).stop().children('span').each(function(index) {

		$(this).animate({
				"opacity": 0.1
			}, 200)
			.animate({
				"opacity": 1
			}, 200);


	});
});


//siliderbarFlag为侧边栏标志,代表侧边栏有无出现
var sliderbarFlag = 0;
//单击侧边的三道杠标签，出现侧边栏
$(".leftbar").click(function(event) {
	var $slidebar = $(".slidebar");
	if (sliderbarFlag === 0) {
		sliderbarFlag = 1;
		//设置侧边栏的动画
		$slidebar.css("display", "block")
			.css("opacity", "1")
			.animate({
				"left": "-200px"
			}, 1)
			.animate({
				"left": "0"
			}, 200);
		//设置交叉图标的动画
		$('.xicon').css('display', 'block')
			.animate({
				"left": "-60px"
			}, 1)
			.animate({
				"left": "140px"
			}, 200);
	}


});

//单击交叉时，关闭侧边栏
$(".xicon").click(function(event) {
	if (sliderbarFlag === 1) {
		sliderbarFlag = 0;
		var $slidebar = $(".slidebar");
		//侧边栏动画
		$slidebar.animate({
				"left": "0"
			}, 1)
			.animate({
				"left": "-250px"
			}, 300);
		var $xicon = $(".xicon");
		//交叉图标动画
		$xicon.animate({
			"left": "-80px"
		}, 300);
		// .css("display","none");

	}

})

//响应式布局时用来显示窗口大小的临时窗口,用于测试
$(window).resize(function() {
	var width = $(window).width();
	var child = $("<span>" + width + "</span>");
	$('#test').empty().append(child);
})


//点击图片展示栏的小按钮时,切换不同图片
var $rightcir = $('.rightcir');
var $showpic = $('.showpic');
$rightcir.each(function(index) {
	var realindex = index + 1;
	$(this).click(function() {
		$showpic.css("background-image", "url(images/gallery-pic/" + realindex + ".jpg)");
	});
});