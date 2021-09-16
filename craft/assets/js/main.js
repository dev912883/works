var $status = $('.select__3__slider__one__info');
var $slickElement = $('.select__3__slider__one');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 3;
    $status.text('Показано ' + i + '-' + slick.slideCount + ' из 21 предложения');
});

$slickElement.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        variableWidth: false,
          slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        variableWidth: false,
          slidesToShow: 1,
      }
    }
  ]
});

$('.select__6__slider__two').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.select__7__slider__three').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        variableWidth: false,
          slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        variableWidth: false,
          slidesToShow: 1,
      }
    }
  ]
});
 $('.select__1__slider__for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     fade: true,
     dots: true,
     asNavFor: '.select__1__slider__nav'
});
$('.select__1__slider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.select__1__slider__for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    centerPadding: 0
});

$(".green a").click(function() {
    $(this).parents(".green").toggleClass("active"); //добавляем класс текущей (нажатой)
 });
$(".footer__title").click(function() {
    $(this).parents(".footer__item").toggleClass("active"); //добавляем класс текущей (нажатой)
 });
$(".header__button__mobile").click(function() {
    $(".header__menu__mobile").toggleClass("active"); //добавляем класс текущей (нажатой)
    $("body").toggleClass("bg"); //добавляем класс текущей (нажатой)
});
$(".header__curent a").click(function() {
    $(".header__curent").toggleClass("active"); //добавляем класс текущей (нажатой)
});
$(".header__catalog__mobile").click(function() {
    $(".header__panel__mobile").toggleClass("active"); //добавляем класс текущей (нажатой)
    $("body").addClass("bg"); //добавляем класс текущей (нажатой)
});
$(".header__clouse").click(function() {
    $(".header__panel__mobile").removeClass("active"); //добавляем класс текущей (нажатой)
    $("body").removeClass("bg"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__1").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_1"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__2").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_2"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__3").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_3"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__4").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_4"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__5").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_5"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__6").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_6"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__7").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_7"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__8").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_8"); //добавляем класс текущей (нажатой)
});
$(".select__5__item__9").hover(function() {
    $(this).parents(".select__5__name").toggleClass("active_9"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__1").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_1"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__2").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_2"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__3").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_3"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__4").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_4"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__5").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_5"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__6").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_6"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__7").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_7"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__8").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_8"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__9").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_9"); //добавляем класс текущей (нажатой)
});
$(".select__13__item__10").hover(function() {
    $(this).parents(".select__13__table").toggleClass("active_10"); //добавляем класс текущей (нажатой)
});
$("#all").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});
$(".select__7__text").each(function(i) {
      if ($(this).text().length > 226) {
         $(this).addClass("more");
      }
});
$(".select__4__text").each(function(i) {
      if ($(this).text().length > 150) {
         $(this).addClass("more");
      }
});
$(".select__6__tablinks").click(function () {
    $('input[type=checkbox]').prop('checked', false);
});
$(function (){ 
    $('.select__6__tablinks').click(function(){
       var html = $(this).text();
       $(".select__6__checkbox span").text(html);
    });
});
$('.select__13__scroll').mCustomScrollbar({
    axis: 'x',              // вертикальный скролл 
    theme: 'dark-2',  // тема 
    scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
    mouseWheel: {
        deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
    }
});
$(document).ready(function(){
	$('.select__11__redmore').click(function(){
		$('.select__11__box').toggleClass('hide');	
		if ($('.select__11__box').hasClass('hide')) {
			$('.select__11__redmore').html('Читать полностью<i></i>');
		} else {
			$('.select__11__redmore').html('Скрыть<i></i>');
		}		
		return false;
	});				
});
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("select__6__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("select__6__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).className += " active";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen1").click();