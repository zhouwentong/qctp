$(function(){
	$('.m11 li').not('.li2').find('img').hover(function(){
		var title=$(this).attr('title');
		var src=$(this).attr('data-src');
		$('.m11 .l2 img').attr('src',src);
		$('.m11 .l2 h3').text(title);
	})
	$('.m6 li:nth-child(4n+3)').css('background',"#E9E9E9");
	$('.m6 li:nth-child(4n+4)').css('background',"#E9E9E9");
	$('.ma .br2 li:last-child').css('margin-left','10px');
});