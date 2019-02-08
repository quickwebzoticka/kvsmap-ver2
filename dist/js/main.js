$(document).ready(function(){

	$.scrollify({
	    section : ".screen",
	    sectionName : "section-name",
	    interstitialSection : "",
	    easing: "easeOutExpo",
	    scrollSpeed: 1100,
	    offset : 0,
	    scrollbars: true,
	    standardScrollElements: "",
	    setHeights: true,
	    overflowScroll: true,
	    updateHash: true,
	    touchScroll:true,
	    before:function() {},
	    after:function() {},
	    afterResize:function() {},
	    afterRender:function() {}
	  });

	$(document).on('click', '.pagination-item:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});


	$(document).on('click', '.burger', function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.header-menu').removeClass('active');
			$('.header-wrapper .link-tel').fadeIn(300);
			$('.header-wrapper .link-feedback').fadeIn(300);
			$.scrollify.enable();
			$('html, body').css('overflow', 'auto');
			return false;
		}
		
		$(this).addClass('active');
		$('.header-menu').addClass('active');
		$('.header-wrapper .link-tel').fadeOut(300);
		$('.header-wrapper .link-feedback').fadeOut(300);
		$('html, body').css('overflow', 'hidden');
		$.scrollify.disable();
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
		el.on('mouseenter', function(){
			stop();
			$.scrollify.disable();
		});
		el.on('mouseleave', function(){
			anim();
			$.scrollify.enable();
		});
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

	$(document).on('click', '.slider-nav-bot__arrow_next', function(){
		$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'none'); //Отключение активности стрелки


		//прокрутка картинки на первой карточки
		let temp  = $('.slider-card-img-track').css('transform'),
			temp1 = $('.slider-card-img-track').height(),
			temp2 = $('.slider-card-2-side-head-track').css('transform');
			temp3 = $('.slider-card-3-track').css('transform'),
			currentCount = $('.slider-nav-bot__count_current').text();

		temp = temp.replace('(', '').replace(')', '').split(', ');
		temp = temp[temp.length - 1] - 210;

		temp2 = temp2.replace('(', '').replace(')', '').split(', ');
		temp2 = temp2[temp2.length - 1] - 15;

		temp3 = temp3.replace('(', '').replace(')', '').split(', ');
		temp3 = temp3[temp3.length - 1] - 400;

		if (temp <= -(temp1)) {
			$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'auto');
			return false;
		}

		$('.slider-card-img-track').css('transform', 'translateY(' + temp + 'px)');

		$('.slider-card-2-side-head-track').css('transform', 'translateY(' + temp2 + 'px)');

		$('.slider-card-3-track').css('transform', 'translateY(' + temp3 + 'px)');


		$('.slider-card-text.active').fadeOut(500, function(){
			$(this).removeClass('active').next().fadeIn(500, function(){
				$(this).addClass('active');
			})
		});

		$('.slider-card-2-side-text-wrapper.active').fadeOut(500, function(){
			$(this).removeClass('active').next().fadeIn(500, function(){
				$(this).addClass('active');
			})
		});

		$('.slider-card-footer .timestamp-wrapper.active').slideUp(500, function(){
			$(this).removeClass('active').next().slideDown(500, function(){
				$(this).addClass('active');
			});
		});

		$('.slider-card-2-side-footer .timestamp-wrapper.active').slideUp(500, function(){
			$(this).removeClass('active').next().slideDown(500, function(){
				$(this).addClass('active');
			});
		});

		let card2img = $('.slider-card-2-side-img-wrapper.active');

		function card2imgScroll(card2img){
			card2img.fadeOut(1000, function(){
				$(this).removeClass('active');
			});
			card2img.next().fadeIn(1000, function(){
				$(this).addClass('active');
			});
		};

		card2imgScroll(card2img);

		$('.slider-nav-bot__count_current').text(++currentCount);
		setTimeout(function(){
			$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'auto'); //Включение активности стрелки
		}, 1000);
	});

	$(document).on('click', '.slider-nav-bot__arrow_prev', function(){
		$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'none'); //Отключение активности стрелки


		//прокрутка картинки на первой карточки
		let temp  = $('.slider-card-img-track').css('transform'),
			temp1 = $('.slider-card-img-track').height(),
			temp2 = $('.slider-card-2-side-head-track').css('transform');
			temp3 = $('.slider-card-3-track').css('transform'),
			currentCount = $('.slider-nav-bot__count_current').text();

		temp = temp.replace('(', '').replace(')', '').replace('-', '').split(', ');
		temp = -(parseInt(temp[temp.length - 1])) + 210;

		temp2 = temp2.replace('(', '').replace(')', '').replace('-', '').split(', ');
		temp2 = -(parseInt(temp2[temp2.length - 1])) + 15;

		temp3 = temp3.replace('(', '').replace(')', '').replace('-', '').split(', ');
		temp3 = -(parseInt(temp3[temp3.length - 1])) + 400;

		if (temp > 0) {
			$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'auto');
			return false;
		}

		$('.slider-card-img-track').css('transform', 'translateY(' + temp + 'px)');

		$('.slider-card-2-side-head-track').css('transform', 'translateY(' + temp2 + 'px)');

		$('.slider-card-3-track').css('transform', 'translateY(' + temp3 + 'px)');


		$('.slider-card-text.active').fadeOut(500, function(){
			$(this).removeClass('active').prev().fadeIn(500, function(){
				$(this).addClass('active');
			})
		});

		$('.slider-card-2-side-text-wrapper.active').fadeOut(500, function(){
			$(this).removeClass('active').prev().fadeIn(500, function(){
				$(this).addClass('active');
			})
		});

		$('.slider-card-footer .timestamp-wrapper.active').slideUp(500, function(){
			$(this).removeClass('active').prev().slideDown(500, function(){
				$(this).addClass('active');
			});
		});

		$('.slider-card-2-side-footer .timestamp-wrapper.active').slideUp(500, function(){
			$(this).removeClass('active').prev().slideDown(500, function(){
				$(this).addClass('active');
			});
		});

		let card2img = $('.slider-card-2-side-img-wrapper.active');

		function card2imgScroll(card2img){
			card2img.fadeOut(1000, function(){
				$(this).removeClass('active');
			});
			card2img.prev().fadeIn(1000, function(){
				$(this).addClass('active');
			});
		};

		card2imgScroll(card2img);

		$('.slider-nav-bot__count_current').text(--currentCount);
		setTimeout(function(){
			$('.slider-nav-bot__arrow_prev, .slider-nav-bot__arrow_next').css('pointer-events', 'auto'); //Включение активности стрелки
		}, 1000);
	});

	$(document).on('click', '.form-main-contain-item', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	$(document).on('click', '.form-list-item', function() {
		$(this).addClass('active').nextAll().removeClass('active').css('pointer-events', 'none');
		$(this).next().css('pointer-events', 'auto');



		let a = $(this).index();


		$('.form-main-contain').removeClass('active').eq(a-1).addClass('active');



		progressBarSteps(a);
	});

	function progressBarSteps(a) {
		$('.form-main-progress-step__count').text(a);
		$('.form-main-progress-bar').css('background', 'linear-gradient(90deg, #3968AC 0%, #3968AC ' + (20*a) + '%, transparent ' + (20*a) + '%, transparent 100%)')
	};

	$(document).on('change', 'input[type="file"]', function() {
		let temp = $(this).val();

		temp = temp.split("\\");

		temp = temp[temp.length-1];

		$('.input-file-label').text(temp);
	});

	$(document).on('click', '.pagination-item', function(e){
		e.preventDefault();
		let temp = $(this).attr('href');
		console.log(temp);
		$.scrollify.move('#{temp}');
	})
});