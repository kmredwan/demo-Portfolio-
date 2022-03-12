$(document).ready(function () {
    $(".slider").slick({
        arrows:false ,
        dots:true,
        autoplay:true,
        appendDots:'.slider_dots',
        dotsClass:'dots'


    });

    let hambarger= document.querySelector(".hamberger");
    let times= document.querySelector(".times");
    let mobileNab= document.querySelector(".mobile-nav");

    hambarger.addEventListener('click',function(){
        mobileNab.classList.add('open')


    });

    times.addEventListener('click',function(){
        mobileNab.classList.remove('open')

    });
});

