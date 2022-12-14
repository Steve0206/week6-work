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

	var date = document.querySelector('#date');
	var datepicker = new Datepicker(date, {
		language: 'zh-TW',
	});
    
});