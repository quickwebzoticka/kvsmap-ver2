$(document).ready(function(){

	$(document).on('click', '.pagination-item:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});


	$(document).on('click', '.burger', function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.header-menu').removeClass('active');
			$('.header-wrapper .link-tel').fadeIn(300);
			$('.header-wrapper .link-feedback').fadeIn(300);
			return false;
		}
		
		$(this).addClass('active');
		$('.header-menu').addClass('active');
		$('.header-wrapper .link-tel').fadeOut(300);
		$('.header-wrapper .link-feedback').fadeOut(300);

	});

	function infintyScrollSite() {
		let a = $('.mockup-site img').height();
		console.log(a);
	}

	$('.mockup-site img').ready(function(){
		var el = $(".mockup-site");
		function anim() {
			var st = el.scrollTop();
			var sb = el.prop("scrollHeight")-el.innerHeight();
			console.log(st, sb);

			el.animate({scrollTop: st < sb / 2 ? sb : 0}, 100000,"linear", anim);
		};
		function stop(){
			el.stop();
		};
		anim();
		el.hover(stop, anim);
	});


})