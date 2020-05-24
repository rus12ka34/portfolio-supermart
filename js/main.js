// Скрипт созданный к проекту: SuperMart 
// Разработчик: Карущенко Руслан 
// Tg: @Ruska17
// Vk: https://vk.com/krip2
// freelancer: https://freelancehunt.com/freelancer/ruska35.html








//-------------Все слайдеры

var checkClickDropdown = false;
var checkClickLang = false;
var checkClickCurrency = false;


$('.owl-arrivals').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    items:4,
    navText:['<div class="arrivals-btn-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>','<div class="arrivals-btn-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
    responsive:{
        0:{
            items:1
        },
        390:{
            items:2
        },
        995:{
            items:3,
        },
        1200:{
            items:4
        }
    }
})

$('.owl-sellers').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    items:2,
    navText:['<div class="arrivals-btn-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>','<div class="arrivals-btn-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
    responsive:{
        0:{
            items:1
        },
        995:{
            items:1
        },
        1200:{
            items:2
        }
    }
})

$('.owl-testimonials').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    items:1,
    autoplay:true,
    autoplayHoverPause:true
})

$('.owl-mainOffer').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    items:1,
    autoplay:true,
    autoplayHoverPause:true
})

$('.owl-recent').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    center:true,
    navText:['<a class="carousel-control-prev recent-left-btn" href="#carouselExampleControls" role="button" data-slide="prev"><i class="fa fa-angle-left" aria-hidden="true"></i><span class="sr-only">Previous</span></a>','<a class="carousel-control-next recent-right-btn" href="#carouselExampleControls" role="button" data-slide="next"><i class="fa fa-angle-right" aria-hidden="true"></i><span class="sr-only">Next</span></a>'],
    dots:false,
    autoplay:true,
    autoplayHoverPause:true
})

$('.owl-deals').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    center:true,
    navText:['<a class="carousel-control-prev deals-left-btn" href="#carouselExampleControls" role="button" data-slide="prev"><i class="fa fa-angle-left" aria-hidden="true"></i><span class="sr-only">Previous</span></a>','<a class="carousel-control-next deals-right-btn" href="#carouselExampleControls" role="button" data-slide="next"><i class="fa fa-angle-right" aria-hidden="true"></i><span class="sr-only">Next</span></a>'],
    dots:false,
    autoplay:true,
    autoplayHoverPause:true
})

$('.owl-сategories').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    items:10,
    navText:['<div class="arrivals-btn-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>','<div class="arrivals-btn-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
    responsive:{
        0:{
            items:3
        },
        390:{
            items:4
        },
        495:{
            items:5
        },
        995:{
            items:8
        },
        1200:{
            items:10
        }
    }
})
//------------дроп меню валюты

$('a.option-currency').click(function() {
    $('span.value-currency').text($(this).text());
    $('#arrow-currency-chenge').css({transition: ".2s", transform: "rotate(0deg)"});
    checkClickCurrency = false;
});
$('button.currency-chenge').click(function() {
    if (!checkClickCurrency){
        $('#arrow-currency-chenge').css({transition: ".2s", transform: "rotate(180deg)"});
        checkClickCurrency = true;
    } else {
        $('#arrow-currency-chenge').css({transition: ".2s", transform: "rotate(0deg)"});
        checkClickCurrency = false;

    }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("#currency-check-outClick"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('#arrow-currency-chenge').css({transition: ".2s", transform: "rotate(0deg)"});
        checkClickCurrency = false;
    }
});



//------------дроп меню языка

$('a.option-lang').click(function() {
    $('span.value-lang').text($(this).text());
    $('#arrow-lang-chenge').css({transition: ".2s", transform: "rotate(0deg)"});
    checkClickLang = false;
});
$('button.lang-chenge').click(function() {
    if (!checkClickLang){
        $('#arrow-lang-chenge').css({transition: ".2s", transform: "rotate(180deg)"});
        checkClickLang = true;
    } else {
        $('#arrow-lang-chenge').css({transition: ".2s", transform: "rotate(0deg)"});
        checkClickLang = false;

    }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("#lang-check-outClick"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('#arrow-lang-chenge').css({transition: ".2s", transform: "rotate(0deg)"});
        checkClickLang = false;
    }
});




//------------дроп меню категорий

$('a.option-search').click(function() {
    $('span.value-search').text($(this).text());
    $('#arrow-dropdown-categories').css({transition: ".2s", transform: "rotate(0deg)"});
    checkClickDropdown = false;
});
$('button.search-main-dropdown').click(function() {
    if (!checkClickDropdown){
        $('#arrow-dropdown-categories').css({transition: ".2s", transform: "rotate(180deg)"});
        checkClickDropdown = true;
    } else {
        $('#arrow-dropdown-categories').css({transition: ".2s", transform: "rotate(0deg)"});
        checkClickDropdown = false;

    }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("#dropdown-check-outClick"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('#arrow-dropdown-categories').css({transition: ".2s", transform: "rotate(0deg)"});
        checkClickDropdown = false;
    }
});


//------------подвальные дроп-меню

var speed = 500;
var footerLinkHeaderCompanyCheck = false;
var footerLinkHeaderPolicyCheck = false;
var footerLinkHeaderAccountCheck = false;


$('#footer-linkHeader-company-btn').click(function() {
    if (!footerLinkHeaderCompanyCheck){
        $('#footer-linkList-company-obj').stop().animate({height:'192px'},speed);
        $('#footer-linkHeader-company-btn .angle-check').css({transition: ".4s", transform: "rotate(180deg)"});
        footerLinkHeaderCompanyCheck = true;
    }else {
        $('#footer-linkList-company-obj').stop().animate({height:'0px'},speed);
        $('#footer-linkHeader-company-btn .angle-check').css({transition: ".4s", transform: "rotate(0)"});
        footerLinkHeaderCompanyCheck = false;
    }
});

$('#footer-linkHeader-policy-btn').click(function() {
    if (!footerLinkHeaderPolicyCheck){
        $('#footer-linkList-policy-obj').stop().animate({height:'192px'},speed);
        $('#footer-linkHeader-policy-btn .angle-check').css({transition: ".4s", transform: "rotate(180deg)"});
        footerLinkHeaderPolicyCheck = true;
    }else {
        $('#footer-linkList-policy-obj').stop().animate({height:'0px'},speed);
        $('#footer-linkHeader-policy-btn .angle-check').css({transition: ".4s", transform: "rotate(0)"});
        footerLinkHeaderPolicyCheck = false;
    }
});

$('#footer-linkHeader-account-btn').click(function() {
    if (!footerLinkHeaderAccountCheck){
        $('#footer-linkList-account-obj').stop().animate({height:'192px'},speed);
        $('#footer-linkHeader-account-btn .angle-check').css({transition: ".4s", transform: "rotate(180deg)"});
        footerLinkHeaderAccountCheck = true;
    }else {
        $('#footer-linkList-account-obj').stop().animate({height:'0px'},speed);
        $('#footer-linkHeader-account-btn .angle-check').css({transition: ".4s", transform: "rotate(0)"});
        footerLinkHeaderAccountCheck = false;
    }
});


//------------ дроп меню в шапке

var dropmenuDepartmentsCheck = false;


$('#dropdownMenuBtn').click(function() {


    if (!dropmenuDepartmentsCheck){
        $('#dropmenu-departments-slide').stop().animate({height:'482px'},speed);
        $('#dropmenu-departments-slide').css({display: 'block'});
        dropmenuDepartmentsCheck = true;
    }else {
        $('#dropmenu-departments-slide').stop().animate({height:'0px'},speed);
        $('#dropmenu-departments-slide').css({display: 'block'});
        dropmenuDepartmentsCheck = false;
    }
});


//------------ расчёт времени обратного таймера

const year = new Date().getFullYear(); // получаем текущий год
const fourthOfJuly = new Date(year, 5, 1).getTime(); //задаём целивую дату

let timer = setInterval(function() {

  // получаем сегодняшнюю дату
  const today = new Date().getTime();

  // получаем разницу между датами
  const diff = fourthOfJuly - today;

  // вычисление
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // вовод данных
  if (seconds.toString().length != 2) {
    $('#sec-block').text('0' + seconds);
  }else {
    $('#sec-block').text(seconds);
  }

  if (minutes.toString().length != 2) {
    $('#mins-block').text('0' + minutes);
  }else {
    $('#mins-block').text(minutes);
  }

  if (hours.toString().length != 2) {
    $('#hrt-block').text('0' + hours);
  }else {
    $('#hrt-block').text(hours);
  }

  if (days.toString().length != 2) {
    $('#days-block').text('0' + days);
  }else {
    $('#days-block').text(days);
  }

});



//------------ анимация бургера меню

$('#dropdownMenuBtn').click(function(){
    $('#nav-burd').toggleClass('open');
});



//------------ анимация главного бургера меню

$('#nav-burg-main-btn').click(function(){
    $('#nav-burg-main').toggleClass('open');
});

$(document).mouseup(function (e){
    var checkClickOut = $("#nav-burg-main-btn");
    
    if (!checkClickOut.is(e.target) && checkClickOut.has(e.target).length === 0) 
    { 
        $('#nav-burg-main').removeClass('open');
    }
});

