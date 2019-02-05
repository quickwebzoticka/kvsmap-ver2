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

	//Функция автоматичесокй прокрутки
	const autScrollSiteView = (mockupSite) => {
		let el = mockupSite;
		function anim() {
			let st = el.scrollTop();
			let sb = el.prop("scrollHeight")-el.innerHeight();

			el.animate({scrollTop: st < sb / 2 ? sb : 0}, sb < 1000 ? 30000 : 100000,"linear", anim);
		};
		function stop(){
			el.stop();
		};
		el.on('mouseenter', stop);
		el.on('mouseleave', anim);
		anim();
	};

	//Инициализцаия автоматической прокрутки
	$('[site]').each(function(){
		let temp = $(this);

		temp.find('img').ready(autScrollSiteView(temp));
	});

	$(document).on('click', '.tabs-nav-item:not(.active)', function(){
		$(this).addClass('active').siblings().removeClass('active');

		$('.tabs-list-item').removeClass('active').eq($(this).index()).addClass('active');

		let temp = $('.tabs-list-item').eq($(this).index()).find('[site]');

		temp.each(function(){
			$(this).trigger('mouseenter').trigger('mouseleave');
		});
	});

	$(document).on('click', '.ways-dev-list-t1 .ways-dev-list-item:not(.active)', function(){
		$(this).addClass('active').siblings().removeClass('active');

		$('.ways-dev-img-lg-wrapper .ways-dev-img-lg').removeClass('active').eq($(this).index()).addClass('active');
		$('.ways-dev-img-wrapper .ways-dev-img').removeClass('active');

		$('.ways-dev-list-t2').removeClass('active').eq($(this).index()).addClass('active');
		$('.ways-dev-list-t2 .ways-dev-list-item').removeClass('active');
	});

	$(document).on('click', '.ways-dev-list-t2 .ways-dev-list-item:not(.active)', function(){
		$(this).addClass('active').siblings().removeClass('active');

		$('.ways-dev-img-lg-wrapper .ways-dev-img-lg').removeClass('active');

		$('.ways-dev-img').removeClass('active').eq($(this).index()).addClass('active');
	});

	$(document).on('click', '.slider-nav-bot__arrow_prev', function(){
		$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'none');

		let temp  = $('.slider-card-img-track').css('transform');
			temp1 = $('.slider-card-img-track').height();

		temp = temp.replace('(', '').replace(')', '').split(', ');
		temp = temp[temp.length - 1] - 210;

		if ((temp) <= -(temp1)) {
			return false;
		}

		$('.slider-card-img-track').css('transform', 'translateY(' + temp + 'px)');
		setTimeout(function(){
			$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'auto');
		}, 1000);
	})
});