// JavaScript Document
$(function(){
	var duration = 300;
	var $aside = $('.menu > aside');
	var $asidebtn = $aside.find('button').on('click',function(){
		$aside.toggleClass('open');
		if($aside.hasClass('open')){
			$aside.stop(true).animate({right:'-70px'},duration,'easeOutBack');
		}else{
			$aside.stop(true).animate({right:'-300px'},duration,'easeInBack');
		};
	});
})
$(function(){
	$('.inner00').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:0},1200);
	});
});
$(function(){
	$('.inner01').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:$('#sec01').offset().top},1200);
	});
});
$(function(){
	$('.inner02').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:$('#sec02').offset().top},1200);
	});
});
$(function(){
	$('.inner03').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:$('#sec03').offset().top},1200);
	});
});
$(function(){
	$('.inner04').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:$('#sec04').offset().top},1200);
	});
});$(function(){
	$('.inner05').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:$('#sec05').offset().top},1200);
	});
});
$(function(){
	$('.inner06').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:$('#sec06').offset().top},1200);
	});
});
$(function(){
	$('.bk').on('click',function(){
		$('html,body').stop(true).animate({scrollTop:$('#bk').offset().top},1200);
	});
});