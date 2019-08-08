
let dataReg = {},
stepReg = 1;
let stepDesc = $('.content_slide-status span'),
tipsReg = $('.tips-reg'),
wrapReg = $('.wrap-reg'),
blockReg = $('.block-reg'),
btnBack = $('.content_btn-back button');

let blockStep1 = $('.body-block_form-1'),
blockStep2 = $('.body-block_form-2'),
blockStep3 = $('.body-block_form-3');

/* Кнопка первого слайда регистрации */
$('.btn-reg-step-1').on('click', function regStep1(e) {
	e.preventDefault();

	let user = $('.body-block_form-1 input')[0].value,
	mail = $('.body-block_form-1 input')[1].value,
	pass = $('.body-block_form-1 input')[2].value;

	if (mail.search('@') == -1 || mail.length < 5) {
		showTipsReg('Неверный Email');
		return;
	}
	if (pass.length < 8) {
		showTipsReg('Пароль должен быть не менее 8 символов');
		return;
	}

	tipsReg.css({'opacity' : '0'});
	blockStep1.slideUp(0);
	blockStep2.slideDown(500);

	dataReg.name = user;
	dataReg.email = mail;
	dataReg.password = pass;

	wrapReg.css({
		'background-image':'url(img/reg-slide-two.jpg)',
		'background-position':'bottom center'
	});
	blockReg.css('left','33.5%');
	btnBack.css({'display' : 'block'});
	stepDesc.text('Шаг 2 из 3');
	stepReg = 2;
});

/* Кнопка второго слайда регистрации */
$('.btn-reg-step-2').on('click', function regStep2(e) {
	e.preventDefault();

	tipsReg.css({'opacity' : '0'});
	blockStep2.slideUp(0);
	blockStep3.slideDown(500);

	wrapReg.css({
		'background-image':'url(img/reg-slide-three.jpg)',
		'background-position':'bottom left'
	});
	blockReg.css('left','67%');
	stepDesc.text('Шаг 3 из 3');
	stepReg = 3;
});

/* Кнопка третьего слайда регистрации */
$('.btn-reg-step-3').on('click', function regStep1(e) {
	e.preventDefault();

	let site = $('.body-block_form-3 input')[0].value,
	tel = $('.body-block_form-3 input')[1].value;

	if(site.indexOf('.') == -1 || site.length < 4) {
		showTipsReg('Неверный url сайта');
		return;
	}

	dataReg.url = site;
	dataReg.phone = tel;

	tipsReg.css({'opacity' : '0'});
	console.dir(dataReg);
});

/* Кнопка НАЗАД на слайдах */
btnBack.on('click', function btnStepBack() {
	tipsReg.css({'opacity' : '0'});
	if (stepReg == 2) {
		blockStep2.slideUp(0);
		blockStep1.slideDown(500);

		wrapReg.css({
			'background-image':'url(img/reg-slide-one.jpg)',
			'background-position':'center right'
		});

		blockReg.css('left','0%');
		btnBack.css({'display' : 'none'});
		stepDesc.text('Шаг 1 из 3');
		stepReg = 1;
	}
	if (stepReg == 3) {
		blockStep3.slideUp(0);
		blockStep2.slideDown(500);

		wrapReg.css({
			'background-image':'url(img/reg-slide-two.jpg)',
			'background-position':'bottom center'
		});

		blockReg.css('left','33.5%');
		stepDesc.text('Шаг 2 из 3');
		stepReg = 2;
	}
});

/* Подсказки всплывающие */
function showTipsReg(text) {
	tipsReg.css({'opacity' : '1'});
	tipsReg.text(text);
}

/* Выбор radio btn - 2 слайд */
function selectTypeRadio() {
	let radio = $('.body-block_form-2 input');

	for(let i = 0; i < radio.length; i++) {
		radio[i].addEventListener('click', function(e) {
			$('.btn-reg-step-2').slideDown(300);
			for (let j = 0; j < radio.length; j++) {
				tipsReg.css({'opacity' : '0'}); /*временно пока мессенджер недоступен*/
				radio[j].parentElement.style.border = '2px solid #eee';
			}
			e.target.parentElement.style.border = '2px solid #1487C5';
			dataReg.type = e.target.value;
		});
	}
}
selectTypeRadio();

/*временно пока мессенджер недоступен*/
$('.temp-type-desabled').click(function() {
	showTipsReg('Мессенджер скоро будет доступен');
})