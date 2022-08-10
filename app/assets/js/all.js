$('document').ready(function() {
    // 打開選單
    $('.m-link').click(function(event) {
        event.preventDefault();
        $('.m-menu').toggleClass('hidden');
    });

    const swiper = new Swiper('.swiper', {
	  // Optional parameters
	
		direction: 'horizontal',
		loop: true,
		speed:2000,
		autoplay: {
			delay:2000,
		},
		effect:'slide',

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
	});
		//滑鼠移過去停止撥動
	swiper.el.onmouseover = function(){
		swiper.autoplay.stop();
	}

	//滑鼠移開自動撥放
	swiper.el.onmouseout = function(){
		swiper.autoplay.start();
	}
	const elem = document.querySelector('input[name="foo"]');
	const datepicker = new Datepicker(elem, {
		
	}); 
    
});