
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
});