$(document).ready(function() {

	let statusBlockReg = 1;

	let btn = $('.reg_slide-next').on('click', function function_name () {

		if (statusBlockReg == 1) {
			$('.wrap-reg').css({
				'background-image':'url(img/reg-slide-two.jpg)',
				'background-position':'bottom center'
			});
			$('.block-reg').css('left','33.5%');
			$('.reg_content').text('Шаг 2 из 3');
			statusBlockReg = 2;
		}
		else if (statusBlockReg == 2) {
			$('.wrap-reg').css({
				'background-image':'url(img/reg-slide-three.jpg)',
				'background-position':'bottom left'
			});
			$('.block-reg').css('left','67%');	
			$('.reg_content').text('Шаг 3 из 3');
			statusBlockReg = 3;
		}
		else if (statusBlockReg == 3) {
			$('.wrap-reg').css({
				'background-image':'url(img/reg-slide-one.jpg)',
				'background-position':'center right'
			});
			$('.block-reg').css('left','0%');	
			$('.reg_content').text('Шаг 1 из 3');
			statusBlockReg = 1;
		}

	});

















});