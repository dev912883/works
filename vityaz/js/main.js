
$(document).ready(function(){

	// Phone mask
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	// Menu
	const menu = $('.header__menu'),
	menuItem = $('.header__menu ul li:not(.header__menu__drop) a'),
	hamburger = $('.header__burger');

	hamburger.on('click', function() {
		hamburger.toggleClass('active');
		menu.toggleClass('active');
		$('body').toggleClass('overflow-hidden');
		if ($('.header__menu__drop__list').hasClass('active')) {
			$('.header__menu__drop__list').toggleClass('active');
		}
		else {
			return;
		}
	});

	menuItem.on('click', function() {
		hamburger.toggleClass('active');
		menu.toggleClass('active');
		if ($('body').hasClass('overflow-hidden')) {
			$('body').toggleClass('overflow-hidden');
		}
		else {
			return;
		}
		if ($('.header__menu__drop__list').hasClass('active')) {
			$('.header__menu__drop__list').toggleClass('active');
		}
		else {
			return;
		}
	});

	$('.header__menu__drop').on('click', function() {
		$('.header__menu__drop__list').toggleClass('active');
	});

	// Tabs
	$('ul.news__tabs').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active').closest('div.container').find('div.news__tabcontent').removeClass('active').eq($(this).index()).addClass('active');
	});

	// Accordeon
	const acc = document.getElementsByClassName("faq__item__button");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
	
	// Footer menu
	$('.footer__subtitle__drop').on('click', function(){
		$(this).closest('.footer__item').toggleClass('active');
		$(this).toggleClass('active');
	});

	// Modal
	$('.modal__close').on('click', function() {
		$('.overlay, #action, #thanks').fadeOut();
	});
	$('[data-modal=action]').on('click', function() {
		$('.overlay, #action').fadeIn();
	});
	$('[data-modal=thanks]').on('click', function() {
		$('.overlay, #thanks').fadeIn();
	});

});