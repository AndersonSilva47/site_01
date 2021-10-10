
let qtdSlide = document.querySelectorAll('.img-slide').length;
let widthSlide = document.querySelector('.slider').clientWidth;
let heightSlide = document.querySelector('.slider').clientHeight;
let widthDaily = document.querySelector('.hot-daily').clientWidth;

document.querySelector('.control-slide').style.width = `${widthSlide}px`; //CONFIGURAÇÃO PARA ESPAÇO FIXO;
document.querySelector('.control-slide').style.height = `${heightSlide}px`;

document.querySelector('.slot-slide').style.width = `${widthSlide * qtdSlide}px`;
document.querySelector('.promotion').style.width = `${widthSlide}px`;
document.querySelector('.promotion2').style.width = `${widthDaily}px`;

let currentSlide = 0;

function prev() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = qtdSlide - 1;
    updateMargin();

}

function goNext() {
    currentSlide++;
    if (currentSlide > (qtdSlide - 1)) currentSlide = 0;
    updateMargin();
}

let sliderItemWidth;

function updateMargin() {
    let sliderItemWidth = document.querySelector('.img-slide').clientWidth;

    let newMargin = (currentSlide * sliderItemWidth);

    document.querySelector('.slot-slide').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);

//

let img1 = document.querySelector('.img-slide.img1').style.backgroundImage;
let img2 = document.querySelector('.img-slide.img2').style.backgroundImage;
let img3 = document.querySelector('.img-slide.img3').style.backgroundImage;
let img4 = document.querySelector('.img-slide.img4').style.backgroundImage;
let img5 = document.querySelector('.img-slide.img5').style.backgroundImage;



document.querySelector('.mini-img.img1').style.backgroundImage = img1;
document.querySelector('.mini-img.img2').style.backgroundImage = img2;
document.querySelector('.mini-img.img3').style.backgroundImage = img3;
document.querySelector('.mini-img.img4').style.backgroundImage = img4;
document.querySelector('.mini-img.img5').style.backgroundImage = img5;